"use client";

import {
  APIProvider,
  Map as GoogleMap,
  Marker,
  useMap,
} from "@vis.gl/react-google-maps";

import {
  ChevronDown,
  ChevronUp,
  Clock3,
  LocateFixed,
  MapPin,
  Navigation as NavigationIcon,
  RotateCcw,
  Search,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";

import { useCallback, useEffect, useRef, useState } from "react";

import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Typography,
} from "@mui/material";

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

const defaultCenter = {
  lat: 14.5995,
  lng: 120.9842,
};

type LatLng = {
  lat: number;
  lng: number;
};

type Destination = {
  id: string;
  name: string;
  address: string;
  location: LatLng;
  photoUrl?: string;
  category?: string;
};

type SearchSuggestion = {
  place: google.maps.places.Place;
  text: string;
  secondaryText?: string;
};

type NavigationStep = {
  instruction: string;
  maneuver?: string;
  distanceMeters: number;
  endLocation?: LatLng;
};

type RouteInfo = {
  distanceMeters: number;
  durationSeconds: number;
  polyline: google.maps.LatLng[];
  steps: NavigationStep[];
};

type MapProps = {
  destinationLat?: number;
  destinationLng?: number;
  fromCurrentPosition?: boolean;
};

const FARE_BASE = 15;
const FARE_PER_KM = 2;

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function formatDistance(distanceMeters: number | null) {
  if (distanceMeters === null) return "--";

  if (distanceMeters < 1000) {
    return `${Math.round(distanceMeters)} m`;
  }

  return `${(distanceMeters / 1000).toFixed(1)} km`;
}

function formatDuration(seconds: number | null) {
  if (seconds === null) return "--";

  const minutes = Math.round(seconds / 60);

  if (minutes < 60) {
    return `${minutes} min`;
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (remainingMinutes === 0) {
    return `${hours} hr`;
  }

  return `${hours} hr ${remainingMinutes} min`;
}

function calculateFare(distanceMeters: number | null) {
  if (distanceMeters === null) return null;

  const kilometers = distanceMeters / 1000;
  const fare = FARE_BASE + kilometers * FARE_PER_KM;

  return Math.ceil(fare);
}

function getDistanceBetweenPoints(first: LatLng, second: LatLng): number {
  if (!google.maps?.geometry?.spherical) {
    return 0;
  }

  return google.maps.geometry.spherical.computeDistanceBetween(
    new google.maps.LatLng(first.lat, first.lng),
    new google.maps.LatLng(second.lat, second.lng),
  );
}

function getDistanceToPolyline(
  location: LatLng,
  polyline: google.maps.LatLng[],
) {
  if (!google.maps?.geometry?.spherical || polyline.length === 0) {
    return Infinity;
  }

  const current = new google.maps.LatLng(location.lat, location.lng);

  let minimumDistance = Infinity;

  for (const point of polyline) {
    const distance = google.maps.geometry.spherical.computeDistanceBetween(
      current,
      point,
    );

    if (distance < minimumDistance) {
      minimumDistance = distance;
    }
  }

  return minimumDistance;
}

function getManeuverLabel(maneuver?: string) {
  if (!maneuver) {
    return "Continue";
  }

  const normalized = maneuver.toLowerCase();

  if (normalized.includes("left")) {
    return "Turn left";
  }

  if (normalized.includes("right")) {
    return "Turn right";
  }

  if (normalized.includes("roundabout") || normalized.includes("rotary")) {
    return "Roundabout";
  }

  if (normalized.includes("uturn") || normalized.includes("u-turn")) {
    return "Make a U-turn";
  }

  if (normalized.includes("merge")) {
    return "Merge";
  }

  if (normalized.includes("fork")) {
    return "Keep at the fork";
  }

  if (normalized.includes("ramp")) {
    return "Take the ramp";
  }

  return "Continue";
}

/* -------------------------------------------------------------------------- */
/* Map controller                                                             */
/* -------------------------------------------------------------------------- */

function MapController({ center, zoom }: { center: LatLng; zoom: number }) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    map.panTo(center);
    map.setZoom(zoom);
  }, [map, center.lat, center.lng, zoom]);

  return null;
}

/* -------------------------------------------------------------------------- */
/* Route polyline                                                             */
/* -------------------------------------------------------------------------- */

function RoutePolyline({ route }: { route: RouteInfo | null }) {
  const map = useMap();

  useEffect(() => {
    if (!map || !route || route.polyline.length === 0) {
      return;
    }

    const polyline = new google.maps.Polyline({
      path: route.polyline,
      geodesic: true,
      strokeColor: "#1976D2",
      strokeOpacity: 0.95,
      strokeWeight: 6,
      map,
    });

    return () => {
      polyline.setMap(null);
    };
  }, [map, route]);

  return null;
}

/* -------------------------------------------------------------------------- */
/* Destination search                                                         */
/* -------------------------------------------------------------------------- */

function DestinationSearch({
  onSelect,
  collapsed,
  onToggle,
}: {
  onSelect: (destination: Destination) => void;
  collapsed: boolean;
  onToggle: () => void;
}) {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [loading, setLoading] = useState(false);

  const sessionTokenRef =
    useRef<google.maps.places.AutocompleteSessionToken | null>(null);

  useEffect(() => {
    if (!google.maps?.places) return;

    sessionTokenRef.current = new google.maps.places.AutocompleteSessionToken();
  }, []);

  const searchPlaces = useCallback(async (input: string) => {
    if (!input.trim()) {
      setSuggestions([]);
      return;
    }

    if (!google.maps?.places?.AutocompleteSuggestion) {
      console.error("Google Places Autocomplete is not available.");
      return;
    }

    setLoading(true);

    try {
      const request: google.maps.places.AutocompleteRequest = {
        input,
        sessionToken: sessionTokenRef.current || undefined,
        includedRegionCodes: ["ph"],
      };

      const response =
        await google.maps.places.AutocompleteSuggestion.fetchAutocompleteSuggestions(
          request,
        );

      const mappedSuggestions: SearchSuggestion[] = response.suggestions
        .map((suggestion) => {
          const placePrediction = suggestion.placePrediction;

          if (!placePrediction) {
            return null;
          }

          return {
            place: placePrediction.toPlace(),
            text:
              placePrediction.mainText?.text ||
              placePrediction.text?.text ||
              "",
            secondaryText: placePrediction.secondaryText?.text || "",
          };
        })
        .filter((item): item is SearchSuggestion => item !== null)
        .slice(0, 6);

      setSuggestions(mappedSuggestions);
    } catch (error) {
      console.error("Places search error:", error);
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      searchPlaces(value);
    }, 300);

    return () => {
      window.clearTimeout(timer);
    };
  }, [value, searchPlaces]);

  const handleSelect = async (suggestion: SearchSuggestion) => {
    try {
      await suggestion.place.fetchFields({
        fields: [
          "displayName",
          "formattedAddress",
          "location",
          "photos",
          "types",
        ],
      });

      if (!suggestion.place.location) {
        return;
      }

      const location = {
        lat: suggestion.place.location.lat(),
        lng: suggestion.place.location.lng(),
      };

      let photoUrl: string | undefined;

      if (suggestion.place.photos && suggestion.place.photos.length > 0) {
        photoUrl = suggestion.place.photos[0].getURI({
          maxWidth: 600,
          maxHeight: 400,
        });
      }

      const destination: Destination = {
        id: suggestion.place.id || crypto.randomUUID(),
        name: suggestion.place.displayName || suggestion.text || "Destination",
        address:
          suggestion.place.formattedAddress || suggestion.secondaryText || "",
        location,
        photoUrl,
        category: suggestion.place.types?.[0] || undefined,
      };

      setValue(destination.name);
      setSuggestions([]);

      if (google.maps?.places) {
        sessionTokenRef.current =
          new google.maps.places.AutocompleteSessionToken();
      }

      onSelect(destination);
    } catch (error) {
      console.error("Failed to select destination:", error);
    }
  };

  if (collapsed) {
    return (
      <Paper
        elevation={5}
        sx={{
          position: "absolute",
          top: 16,
          left: 16,
          zIndex: 20,
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <Button
          onClick={onToggle}
          sx={{
            minWidth: 52,
            width: 52,
            height: 52,
            borderRadius: 3,
            p: 0,
          }}
          aria-label="Open destination search"
        >
          <Search size={22} />
        </Button>
      </Paper>
    );
  }

  return (
    <Paper
      elevation={5}
      sx={{
        position: "absolute",
        top: 16,
        left: 16,
        right: 16,
        zIndex: 20,
        borderRadius: 3,
        overflow: "visible",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          px: 1.5,
          py: 1,
          gap: 1,
        }}
      >
        <Search size={21} />

        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Search destination..."
          className="w-full bg-transparent outline-none text-sm"
        />

        {loading && <CircularProgress size={18} />}

        {value && !loading && (
          <button
            type="button"
            onClick={() => {
              setValue("");
              setSuggestions([]);
            }}
            className="p-1 rounded-full hover:bg-gray-100"
            aria-label="Clear search"
          >
            <X size={18} />
          </button>
        )}

        <button
          type="button"
          onClick={onToggle}
          className="p-1 rounded-full hover:bg-gray-100"
          aria-label="Collapse destination search"
        >
          <ChevronUp size={20} />
        </button>
      </Box>

      {suggestions.length > 0 && (
        <Box
          sx={{
            borderTop: "1px solid #eee",
            backgroundColor: "white",
            borderRadius: "0 0 12px 12px",
            overflow: "hidden",
          }}
        >
          {suggestions.map((suggestion, index) => (
            <button
              key={`${suggestion.place.id}-${index}`}
              type="button"
              onClick={() => handleSelect(suggestion)}
              className="w-full text-left px-4 py-3 hover:bg-gray-100 flex items-start gap-3"
            >
              <MapPin size={18} className="mt-0.5 shrink-0" />

              <span className="min-w-0">
                <span className="block font-medium text-sm truncate">
                  {suggestion.text}
                </span>

                {suggestion.secondaryText && (
                  <span className="block text-xs text-gray-500 truncate">
                    {suggestion.secondaryText}
                  </span>
                )}
              </span>
            </button>
          ))}
        </Box>
      )}
    </Paper>
  );
}

/* -------------------------------------------------------------------------- */
/* Main map                                                                   */
/* -------------------------------------------------------------------------- */

function NavigationMap({
  destinationLat,
  destinationLng,
  fromCurrentPosition = false,
}: MapProps) {
  const [userLocation, setUserLocation] = useState<LatLng | null>(null);

  const [destination, setDestination] = useState<Destination | null>(null);

  const [route, setRoute] = useState<RouteInfo | null>(null);

  const [loadingRoute, setLoadingRoute] = useState(false);

  const [locationLoading, setLocationLoading] = useState(false);

  const [locationError, setLocationError] = useState<string | null>(null);

  const [mapCenter, setMapCenter] = useState<LatLng>(defaultCenter);

  const [mapZoom, setMapZoom] = useState(13);

  const [routeError, setRouteError] = useState<string | null>(null);

  /* ------------------------------------------------------------------------ */
  /* Navigation state                                                         */
  /* ------------------------------------------------------------------------ */

  const [navigationActive, setNavigationActive] = useState(false);

  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const [offRoute, setOffRoute] = useState(false);

  const [arrived, setArrived] = useState(false);

  const [voiceEnabled, setVoiceEnabled] = useState(true);

  /* ------------------------------------------------------------------------ */
  /* Collapsible panels                                                       */
  /* ------------------------------------------------------------------------ */

  const [searchCollapsed, setSearchCollapsed] = useState(false);

  const [detailsCollapsed, setDetailsCollapsed] = useState(false);

  const watchIdRef = useRef<number | null>(null);

  const lastRerouteAtRef = useRef(0);

  const lastSpokenStepRef = useRef<number | null>(null);

  const arrivedSpokenRef = useRef(false);

  /* ------------------------------------------------------------------------ */
  /* Restore panel state                                                      */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    try {
      const savedSearch = sessionStorage.getItem(
        "tara-navigation-search-collapsed",
      );

      const savedDetails = sessionStorage.getItem(
        "tara-navigation-details-collapsed",
      );

      if (savedSearch !== null) {
        setSearchCollapsed(savedSearch === "true");
      }

      if (savedDetails !== null) {
        setDetailsCollapsed(savedDetails === "true");
      }
    } catch {
      // Ignore storage errors.
    }
  }, []);

  useEffect(() => {
    try {
      sessionStorage.setItem(
        "tara-navigation-search-collapsed",
        String(searchCollapsed),
      );
    } catch {
      // Ignore storage errors.
    }
  }, [searchCollapsed]);

  useEffect(() => {
    try {
      sessionStorage.setItem(
        "tara-navigation-details-collapsed",
        String(detailsCollapsed),
      );
    } catch {
      // Ignore storage errors.
    }
  }, [detailsCollapsed]);

  /* ------------------------------------------------------------------------ */
  /* Current location                                                         */
  /* ------------------------------------------------------------------------ */

  const getCurrentLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by this browser.");
      return;
    }

    setLocationLoading(true);
    setLocationError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        setUserLocation(location);
        setMapCenter(location);

        setMapZoom(navigationActive ? 17 : 15);

        setLocationLoading(false);
      },
      (error) => {
        console.error("Geolocation error:", error);

        setLocationLoading(false);

        switch (error.code) {
          case error.PERMISSION_DENIED:
            setLocationError("Location permission was denied.");
            break;

          case error.POSITION_UNAVAILABLE:
            setLocationError("Your current location is unavailable.");
            break;

          case error.TIMEOUT:
            setLocationError("Getting your location timed out.");
            break;

          default:
            setLocationError("Unable to get your current location.");
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      },
    );
  }, [navigationActive]);

  /* ------------------------------------------------------------------------ */
  /* Watch current location                                                   */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    if (!fromCurrentPosition && !navigationActive) {
      return;
    }

    if (!navigator.geolocation) {
      return;
    }

    getCurrentLocation();

    watchIdRef.current = navigator.geolocation.watchPosition(
      (position) => {
        const location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        setUserLocation(location);

        if (navigationActive) {
          setMapCenter(location);
          setMapZoom(17);
        }
      },
      (error) => {
        console.error("Location watch error:", error);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 5000,
        timeout: 15000,
      },
    );

    return () => {
      if (watchIdRef.current !== null) {
        navigator.geolocation.clearWatch(watchIdRef.current);

        watchIdRef.current = null;
      }
    };
  }, [fromCurrentPosition, navigationActive, getCurrentLocation]);

  /* ------------------------------------------------------------------------ */
  /* Destination from URL                                                     */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    if (destinationLat === undefined || destinationLng === undefined) {
      return;
    }

    if (Number.isNaN(destinationLat) || Number.isNaN(destinationLng)) {
      return;
    }

    const destinationFromUrl: Destination = {
      id: "url-destination",
      name: "Destination",
      address: "",
      location: {
        lat: destinationLat,
        lng: destinationLng,
      },
    };

    setDestination(destinationFromUrl);

    setMapCenter({
      lat: destinationLat,
      lng: destinationLng,
    });

    setMapZoom(15);
  }, [destinationLat, destinationLng]);

  /* ------------------------------------------------------------------------ */
  /* Destination selected from search                                         */
  /* ------------------------------------------------------------------------ */

  const handleDestinationSelect = (selectedDestination: Destination) => {
    setDestination(selectedDestination);
    setRoute(null);
    setRouteError(null);

    setNavigationActive(false);
    setCurrentStepIndex(0);
    setOffRoute(false);
    setArrived(false);

    setMapCenter(selectedDestination.location);

    setMapZoom(15);

    // Keep search compact after selecting.
    setSearchCollapsed(true);
  };

  /* ------------------------------------------------------------------------ */
  /* Calculate route                                                          */
  /* ------------------------------------------------------------------------ */

  const calculateRoute = useCallback(
    async (origin: LatLng) => {
      if (!destination) {
        return;
      }

      if (!google.maps?.routes?.Route) {
        setRouteError("Google Routes API is not available.");
        return;
      }

      setLoadingRoute(true);
      setRouteError(null);

      try {
        const request: google.maps.routes.ComputeRoutesRequest = {
          origin: {
            lat: origin.lat,
            lng: origin.lng,
          },

          destination: {
            lat: destination.location.lat,
            lng: destination.location.lng,
          },

          travelMode: "DRIVING",

          routingPreference: "TRAFFIC_AWARE",

          computeAlternativeRoutes: false,

          fields: ["distanceMeters", "durationMillis", "path", "legs"],
        };

        const result = await google.maps.routes.Route.computeRoutes(request);

        if (!result.routes || result.routes.length === 0) {
          throw new Error("No route found.");
        }

        const googleRoute = result.routes[0];

        const distanceMeters = googleRoute.distanceMeters ?? 0;

        const durationSeconds = (googleRoute.durationMillis ?? 0) / 1000;

        const path: google.maps.LatLng[] = (googleRoute.path ?? []).map(
          (point) => new google.maps.LatLng(point.lat, point.lng),
        );

        /* ------------------------------------------------------------------ */
        /* Extract navigation steps                                           */
        /* ------------------------------------------------------------------ */

        const steps: NavigationStep[] = [];

        for (const leg of googleRoute.legs ?? []) {
          for (const step of leg.steps ?? []) {
            const endLocation = step.endLocation?.latLng;

            steps.push({
              instruction: step.instructions || "Continue",

              maneuver: step.maneuver || undefined,

              distanceMeters: step.distanceMeters ?? 0,

              endLocation: endLocation
                ? {
                    lat: endLocation.lat(),
                    lng: endLocation.lng(),
                  }
                : undefined,
            });
          }
        }

        setRoute({
          distanceMeters,
          durationSeconds,
          polyline: path,
          steps,
        });

        setCurrentStepIndex(0);
        setOffRoute(false);
        setArrived(false);
        arrivedSpokenRef.current = false;
        lastSpokenStepRef.current = null;

        if (!navigationActive) {
          setMapCenter(destination.location);

          setMapZoom(14);
        }
      } catch (error) {
        console.error("Route calculation error:", error);

        setRouteError(
          error instanceof Error ? error.message : "Unable to calculate route.",
        );
      } finally {
        setLoadingRoute(false);
      }
    },
    [destination, navigationActive],
  );

  /* ------------------------------------------------------------------------ */
  /* Automatically calculate initial route                                    */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    if (!userLocation || !destination || route || loadingRoute) {
      return;
    }

    calculateRoute(userLocation);
  }, [userLocation, destination, route, loadingRoute, calculateRoute]);

  /* ------------------------------------------------------------------------ */
  /* Navigation progress                                                      */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    if (!navigationActive || !userLocation || !route) {
      return;
    }

    /* ---------------------------------------------------------------------- */
    /* Check arrival                                                          */
    /* ---------------------------------------------------------------------- */

    if (destination) {
      const destinationDistance = getDistanceBetweenPoints(
        userLocation,
        destination.location,
      );

      if (destinationDistance <= 35) {
        setArrived(true);

        if (
          !arrivedSpokenRef.current &&
          voiceEnabled &&
          "speechSynthesis" in window
        ) {
          window.speechSynthesis.cancel();

          const speech = new SpeechSynthesisUtterance(
            "You have arrived at your destination.",
          );

          speech.rate = 1;
          speech.pitch = 1;

          window.speechSynthesis.speak(speech);

          arrivedSpokenRef.current = true;
        }

        return;
      }

      setArrived(false);
    }

    /* ---------------------------------------------------------------------- */
    /* Determine current step                                                 */
    /* ---------------------------------------------------------------------- */

    let nextStepIndex = currentStepIndex;

    while (nextStepIndex < route.steps.length - 1) {
      const currentStep = route.steps[nextStepIndex];

      if (!currentStep.endLocation) {
        break;
      }

      const distanceToStepEnd = getDistanceBetweenPoints(
        userLocation,
        currentStep.endLocation,
      );

      if (distanceToStepEnd <= 30) {
        nextStepIndex += 1;
      } else {
        break;
      }
    }

    if (nextStepIndex !== currentStepIndex) {
      setCurrentStepIndex(nextStepIndex);
    }

    /* ---------------------------------------------------------------------- */
    /* Off-route detection                                                    */
    /* ---------------------------------------------------------------------- */

    const distanceFromRoute = getDistanceToPolyline(
      userLocation,
      route.polyline,
    );

    const currentlyOffRoute = distanceFromRoute > 60;

    setOffRoute(currentlyOffRoute);

    /* ---------------------------------------------------------------------- */
    /* Automatic rerouting                                                    */
    /* ---------------------------------------------------------------------- */

    if (currentlyOffRoute) {
      const now = Date.now();

      if (now - lastRerouteAtRef.current > 10000) {
        lastRerouteAtRef.current = now;

        calculateRoute(userLocation);
      }
    }
  }, [
    userLocation,
    navigationActive,
    route,
    currentStepIndex,
    destination,
    voiceEnabled,
    calculateRoute,
  ]);

  /* ------------------------------------------------------------------------ */
  /* Voice navigation                                                         */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    if (
      !navigationActive ||
      !route ||
      arrived ||
      !voiceEnabled ||
      !route.steps.length
    ) {
      return;
    }

    if (lastSpokenStepRef.current === currentStepIndex) {
      return;
    }

    const step = route.steps[currentStepIndex];

    if (!step) {
      return;
    }

    lastSpokenStepRef.current = currentStepIndex;

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();

      const speech = new SpeechSynthesisUtterance(step.instruction);

      speech.rate = 1;
      speech.pitch = 1;

      window.speechSynthesis.speak(speech);
    }
  }, [navigationActive, route, currentStepIndex, voiceEnabled, arrived]);

  /* ------------------------------------------------------------------------ */
  /* Start navigation                                                         */
  /* ------------------------------------------------------------------------ */

  const startNavigation = async () => {
    if (!destination) {
      return;
    }

    setNavigationActive(true);
    setDetailsCollapsed(true);
    setSearchCollapsed(true);

    setCurrentStepIndex(0);
    setOffRoute(false);
    setArrived(false);

    arrivedSpokenRef.current = false;
    lastSpokenStepRef.current = null;

    if (userLocation) {
      setMapCenter(userLocation);
      setMapZoom(17);

      await calculateRoute(userLocation);
    } else {
      getCurrentLocation();
    }
  };

  /* ------------------------------------------------------------------------ */
  /* End navigation                                                           */
  /* ------------------------------------------------------------------------ */

  const stopNavigation = () => {
    setNavigationActive(false);
    setCurrentStepIndex(0);
    setOffRoute(false);
    setArrived(false);

    arrivedSpokenRef.current = false;
    lastSpokenStepRef.current = null;

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }

    if (userLocation) {
      setMapCenter(userLocation);
      setMapZoom(15);
    }
  };

  /* ------------------------------------------------------------------------ */
  /* Reset                                                                     */
  /* ------------------------------------------------------------------------ */

  const resetMap = () => {
    stopNavigation();

    setDestination(null);
    setRoute(null);
    setRouteError(null);
    setLocationError(null);

    setSearchCollapsed(false);
    setDetailsCollapsed(false);

    setMapCenter(userLocation || defaultCenter);

    setMapZoom(userLocation ? 15 : 13);
  };

  /* ------------------------------------------------------------------------ */
  /* Fare                                                                      */
  /* ------------------------------------------------------------------------ */

  const estimatedFare = calculateFare(route?.distanceMeters ?? null);

  const currentStep = route?.steps[currentStepIndex] ?? null;

  const distanceToCurrentStep =
    currentStep?.endLocation && userLocation
      ? getDistanceBetweenPoints(userLocation, currentStep.endLocation)
      : null;

  /* ------------------------------------------------------------------------ */
  /* Render                                                                    */
  /* ------------------------------------------------------------------------ */

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "calc(100vh - 64px)",
        minHeight: 500,
        overflow: "hidden",
      }}
    >
      <GoogleMap
        defaultCenter={defaultCenter}
        defaultZoom={13}
        // center={mapCenter}
        // zoom={mapZoom}
        mapId="navigation-map"
        gestureHandling="greedy"
        disableDefaultUI={false}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <MapController center={mapCenter} zoom={mapZoom} />

        <DestinationSearch
          onSelect={handleDestinationSelect}
          collapsed={searchCollapsed}
          onToggle={() => setSearchCollapsed((previous) => !previous)}
        />

        {/* ---------------------------------------------------------------- */}
        {/* Current location marker                                          */}
        {/* ---------------------------------------------------------------- */}

        {userLocation && (
          <Marker position={userLocation} title="Your current location" />
        )}

        {/* ---------------------------------------------------------------- */}
        {/* Destination marker                                                */}
        {/* ---------------------------------------------------------------- */}

        {destination && (
          <Marker position={destination.location} title={destination.name} />
        )}

        {/* ---------------------------------------------------------------- */}
        {/* Route                                                             */}
        {/* ---------------------------------------------------------------- */}

        <RoutePolyline route={route} />

        {/* ---------------------------------------------------------------- */}
        {/* Current location button                                          */}
        {/* ---------------------------------------------------------------- */}

        <Paper
          elevation={5}
          sx={{
            position: "absolute",
            right: 16,
            top: 16,
            zIndex: 15,
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          <Button
            onClick={getCurrentLocation}
            disabled={locationLoading}
            sx={{
              minWidth: 52,
              width: 52,
              height: 52,
              p: 0,
            }}
            aria-label="Use my current location"
          >
            {locationLoading ? (
              <CircularProgress size={22} />
            ) : (
              <LocateFixed size={22} />
            )}
          </Button>
        </Paper>

        {/* ---------------------------------------------------------------- */}
        {/* Location error                                                   */}
        {/* ---------------------------------------------------------------- */}

        {locationError && (
          <Paper
            elevation={4}
            sx={{
              position: "absolute",
              left: 16,
              right: 16,
              bottom: navigationActive ? 190 : destination ? 190 : 24,
              zIndex: 15,
              p: 1.5,
              borderRadius: 2,
              backgroundColor: "rgba(255,255,255,0.96)",
            }}
          >
            <Typography variant="body2" color="error">
              {locationError}
            </Typography>
          </Paper>
        )}

        {/* ---------------------------------------------------------------- */}
        {/* No destination instruction                                       */}
        {/* ---------------------------------------------------------------- */}

        {!destination && !locationError && (
          <Paper
            elevation={4}
            sx={{
              position: "absolute",
              left: 16,
              right: 16,
              bottom: 24,
              zIndex: 10,
              p: 2,
              borderRadius: 3,
              textAlign: "center",
              backgroundColor: "rgba(255,255,255,0.96)",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Search for a destination to calculate your route.
            </Typography>
          </Paper>
        )}

        {/* ---------------------------------------------------------------- */}
        {/* Route error                                                      */}
        {/* ---------------------------------------------------------------- */}

        {routeError && (
          <Paper
            elevation={4}
            sx={{
              position: "absolute",
              left: 16,
              right: 16,
              bottom: navigationActive ? 150 : destination ? 150 : 24,
              zIndex: 15,
              p: 1.5,
              borderRadius: 2,
              backgroundColor: "rgba(255,255,255,0.96)",
            }}
          >
            <Typography variant="body2" color="error">
              {routeError}
            </Typography>
          </Paper>
        )}

        {/* ================================================================= */}
        {/* LIVE NAVIGATION PANEL                                             */}
        {/* ================================================================= */}

        {destination && navigationActive && (
          <Paper
            elevation={8}
            sx={{
              position: "absolute",
              left: 12,
              right: 12,
              bottom: 50,
              zIndex: 30,
              borderRadius: 4,
              overflow: "hidden",
              backgroundColor: "rgba(255,255,255,0.98)",
            }}
          >
            {/* --------------------------------------------------------- */}
            {/* Navigation header                                         */}
            {/* --------------------------------------------------------- */}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 2,
                py: 1,
                borderBottom: "1px solid #eee",
              }}
            >
              <Box
                sx={{
                  minWidth: 0,
                  flex: 1,
                }}
              >
                <Typography variant="caption" color="text.secondary">
                  Navigating to
                </Typography>

                <Typography variant="body2" fontWeight={700} noWrap>
                  {destination.name}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  gap: 0.5,
                }}
              >
                <button
                  type="button"
                  onClick={() => {
                    setVoiceEnabled((previous) => !previous);
                  }}
                  className="p-2 rounded-full hover:bg-gray-100"
                  aria-label={
                    voiceEnabled
                      ? "Disable voice navigation"
                      : "Enable voice navigation"
                  }
                >
                  {voiceEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
                </button>
              </Box>
            </Box>

            {/* --------------------------------------------------------- */}
            {/* Navigation instruction                                    */}
            {/* --------------------------------------------------------- */}

            <Box
              sx={{
                px: 2,
                py: 1.5,
              }}
            >
              {arrived ? (
                <>
                  <Typography variant="h6" fontWeight={800}>
                    You have arrived
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 0.25 }}
                  >
                    {destination.name}
                  </Typography>
                </>
              ) : offRoute ? (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <NavigationIcon size={28} className="text-orange-600" />

                    <Typography variant="h6" fontWeight={800}>
                      Recalculating route...
                    </Typography>
                  </Box>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 0.5 }}
                  >
                    You appear to be off the current route.
                  </Typography>
                </>
              ) : currentStep ? (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#1976D2",
                      color: "white",
                      flexShrink: 0,
                    }}
                  >
                    <NavigationIcon size={27} />
                  </Box>

                  <Box
                    sx={{
                      minWidth: 0,
                      flex: 1,
                    }}
                  >
                    <Typography
                      variant="caption"
                      color="primary"
                      fontWeight={700}
                    >
                      {getManeuverLabel(currentStep.maneuver)}
                    </Typography>

                    <Typography
                      variant="h6"
                      fontWeight={800}
                      sx={{
                        lineHeight: 1.2,
                        mt: 0.25,
                      }}
                    >
                      {currentStep.instruction}
                    </Typography>

                    {distanceToCurrentStep !== null && (
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          mt: 0.5,
                        }}
                      >
                        {formatDistance(distanceToCurrentStep)} to next turn
                      </Typography>
                    )}
                  </Box>
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                  }}
                >
                  <CircularProgress size={24} />

                  <Typography variant="body2" fontWeight={600}>
                    Preparing navigation...
                  </Typography>
                </Box>
              )}
            </Box>

            {/* --------------------------------------------------------- */}
            {/* Navigation footer                                         */}
            {/* --------------------------------------------------------- */}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 1,
                px: 2,
                pb: 1.5,
              }}
            >
              <Typography variant="caption" color="text.secondary">
                {route
                  ? `${formatDistance(
                      route.distanceMeters,
                    )} remaining • ${formatDuration(route.durationSeconds)}`
                  : "Calculating route..."}
              </Typography>

              <Button
                variant="outlined"
                color="error"
                size="small"
                onClick={stopNavigation}
                sx={{
                  borderRadius: 2,
                  whiteSpace: "nowrap",
                }}
              >
                End Navigation
              </Button>
            </Box>
          </Paper>
        )}

        {/* ================================================================= */}
        {/* DESTINATION / ROUTE DETAILS                                      */}
        {/* ================================================================= */}

        {destination && !navigationActive && (
          <>
            {/* ========================================================== */}
            {/* COLLAPSED ROUTE BAR                                        */}
            {/* ========================================================== */}

            {detailsCollapsed ? (
              <Paper
                elevation={6}
                sx={{
                  position: "absolute",
                  left: 12,
                  right: 12,
                  bottom: 50,
                  zIndex: 20,
                  borderRadius: 3,
                  overflow: "hidden",
                  backgroundColor: "rgba(255,255,255,0.97)",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    px: 1.5,
                    py: 1,
                  }}
                >
                  <NavigationIcon size={21} className="text-blue-600" />

                  <Box
                    sx={{
                      flex: 1,
                      minWidth: 0,
                    }}
                  >
                    <Typography variant="body2" fontWeight={700} noWrap>
                      {route
                        ? `${formatDistance(
                            route.distanceMeters,
                          )} • ${formatDuration(route.durationSeconds)} • ₱${
                            estimatedFare ?? "--"
                          }`
                        : loadingRoute
                          ? "Calculating route..."
                          : destination.name}
                    </Typography>
                  </Box>

                  <button
                    type="button"
                    onClick={() => setDetailsCollapsed(false)}
                    className="p-2 rounded-full hover:bg-gray-100"
                    aria-label="Expand route details"
                  >
                    <ChevronUp size={21} />
                  </button>
                </Box>
              </Paper>
            ) : (
              /* ========================================================== */
              /* EXPANDED ROUTE DETAILS                                    */
              /* ========================================================== */

              <Paper
                elevation={7}
                sx={{
                  position: "absolute",
                  left: 12,
                  right: 12,
                  bottom: 50,
                  zIndex: 20,
                  borderRadius: 4,
                  overflow: "hidden",
                  backgroundColor: "rgba(255,255,255,0.98)",

                  maxHeight: {
                    xs: "45vh",
                    sm: "42vh",
                    md: "38vh",
                  },

                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* ------------------------------------------------------ */}
                {/* Header                                                  */}
                {/* ------------------------------------------------------ */}

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: 2,
                    py: 1,
                    flexShrink: 0,
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <Typography variant="subtitle1" fontWeight={700}>
                    Route Details
                  </Typography>

                  <button
                    type="button"
                    onClick={() => setDetailsCollapsed(true)}
                    className="p-2 rounded-full hover:bg-gray-100"
                    aria-label="Collapse route details"
                  >
                    <ChevronDown size={21} />
                  </button>
                </Box>

                {/* ------------------------------------------------------ */}
                {/* Scrollable content                                     */}
                {/* ------------------------------------------------------ */}

                <Box
                  sx={{
                    overflowY: "auto",
                    flex: 1,
                    px: 2,
                    py: 1.5,
                    minHeight: 0,
                  }}
                >
                  {/* Destination */}

                  <Box
                    sx={{
                      display: "flex",
                      gap: 1.5,
                      alignItems: "flex-start",
                    }}
                  >
                    <MapPin size={22} className="mt-1 text-red-500 shrink-0" />

                    <Box
                      sx={{
                        minWidth: 0,
                        flex: 1,
                      }}
                    >
                      <Typography
                        variant="h6"
                        fontWeight={700}
                        sx={{
                          lineHeight: 1.2,
                        }}
                      >
                        {destination.name}
                      </Typography>

                      {destination.address && (
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            mt: 0.5,
                          }}
                        >
                          {destination.address}
                        </Typography>
                      )}
                    </Box>
                  </Box>

                  {/* Route statistics */}

                  {route && (
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                        gap: 1,
                        mt: 1.5,
                      }}
                    >
                      <Box
                        sx={{
                          textAlign: "center",
                          p: 1,
                          borderRadius: 2,
                          backgroundColor: "#f5f7fa",
                        }}
                      >
                        <NavigationIcon size={18} />

                        <Typography
                          variant="caption"
                          display="block"
                          color="text.secondary"
                        >
                          Distance
                        </Typography>

                        <Typography variant="body2" fontWeight={700}>
                          {formatDistance(route.distanceMeters)}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          textAlign: "center",
                          p: 1,
                          borderRadius: 2,
                          backgroundColor: "#f5f7fa",
                        }}
                      >
                        <Clock3 size={18} />

                        <Typography
                          variant="caption"
                          display="block"
                          color="text.secondary"
                        >
                          Travel Time
                        </Typography>

                        <Typography variant="body2" fontWeight={700}>
                          {formatDuration(route.durationSeconds)}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          textAlign: "center",
                          p: 1,
                          borderRadius: 2,
                          backgroundColor: "#f5f7fa",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: 19,
                            fontWeight: 700,
                            lineHeight: 1,
                          }}
                        >
                          ₱
                        </Typography>

                        <Typography
                          variant="caption"
                          display="block"
                          color="text.secondary"
                        >
                          Est. Fare
                        </Typography>

                        <Typography variant="body2" fontWeight={700}>
                          ₱{estimatedFare ?? "--"}
                        </Typography>
                      </Box>
                    </Box>
                  )}

                  {/* Loading */}

                  {loadingRoute && (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 1,
                        py: 2,
                      }}
                    >
                      <CircularProgress size={20} />

                      <Typography variant="body2" color="text.secondary">
                        Calculating route...
                      </Typography>
                    </Box>
                  )}

                  {/* Use My Location */}

                  {!userLocation && !loadingRoute && (
                    <Button
                      fullWidth
                      variant="contained"
                      startIcon={<LocateFixed size={18} />}
                      onClick={getCurrentLocation}
                      sx={{
                        mt: 1.5,
                        height: 42,
                        borderRadius: 2,
                      }}
                    >
                      Use My Location
                    </Button>
                  )}

                  {/* Start Navigation */}

                  {route && (
                    <Button
                      fullWidth
                      variant="contained"
                      color="success"
                      startIcon={<NavigationIcon size={18} />}
                      onClick={startNavigation}
                      disabled={loadingRoute}
                      sx={{
                        mt: 1.5,
                        height: 42,
                        borderRadius: 2,
                      }}
                    >
                      {loadingRoute ? "Calculating..." : "Start Navigation"}
                    </Button>
                  )}

                  {/* Reset */}

                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<RotateCcw size={18} />}
                    onClick={resetMap}
                    sx={{
                      mt: 1,
                      height: 40,
                      borderRadius: 2,
                    }}
                  >
                    Reset
                  </Button>
                </Box>
              </Paper>
            )}
          </>
        )}
      </GoogleMap>
    </Box>
  );
}

/* -------------------------------------------------------------------------- */
/* Export                                                                     */
/* -------------------------------------------------------------------------- */

export default function Map(props: MapProps) {
  if (!GOOGLE_MAPS_API_KEY) {
    return (
      <Box
        sx={{
          width: "100%",
          height: "calc(100vh - 64px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 3,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 3,
            maxWidth: 500,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Google Maps API Key Missing
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your .env.local file and
            restart the Next.js development server.
          </Typography>
        </Paper>
      </Box>
    );
  }

  return (
    <APIProvider
      apiKey={GOOGLE_MAPS_API_KEY}
      libraries={["places", "routes", "geometry"]}
    >
      <NavigationMap {...props} />
    </APIProvider>
  );
}
