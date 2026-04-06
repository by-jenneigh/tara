/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Tooltip,
  useMap,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";

const defaultCenter: [number, number] = [14.5995, 120.9842];

function FollowUser({ position }: { position: [number, number] | null }) {
  const map = useMap();
  const [lastPosition, setLastPosition] = useState<[number, number] | null>(
    null,
  );

  useEffect(() => {
    if (!position) return;

    if (!lastPosition) {
      map.setView(position, 16);
      setLastPosition(position);
      return;
    }

    const distance = map.distance(lastPosition, position);

    if (distance > 10) {
      map.flyTo(position, map.getZoom(), {
        duration: 0.5,
      });

      setLastPosition(position);
    }
  }, [position, lastPosition, map]);

  return null;
}

export default function Map({
  destinationLat,
  destinationLng,
  fromCurrentPosition,
}: {
  destinationLat?: number;
  destinationLng?: number;
  fromCurrentPosition?: boolean;
}) {
  const [start, setStart] = useState<[number, number] | null>(null);
  const [end, setEnd] = useState<[number, number] | null>(null);
  const [route, setRoute] = useState<[number, number][]>([]);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(
    null,
  );

  const [distance, setDistance] = useState<number | null>(null);
  const [duration, setDuration] = useState<number | null>(null);

  useEffect(() => {
    if (!destinationLat || !destinationLng) return;

    if (!fromCurrentPosition) {
      setStart(null);
      setRoute([]);
      setDistance(null);
      setDuration(null);
    }

    if (fromCurrentPosition) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const current: [number, number] = [
          pos.coords.latitude,
          pos.coords.longitude,
        ];

        setUserLocation(current);
        setStart(current);
        setEnd([destinationLat, destinationLng]);
      });
    }

    setEnd([destinationLat, destinationLng]);
  }, [destinationLat, destinationLng, fromCurrentPosition]);

  function ClickHandler() {
    useMapEvents({
      click(e) {
        if (!start) {
          setStart([e.latlng.lat, e.latlng.lng]);
        } else if (!end) {
          setEnd([e.latlng.lat, e.latlng.lng]);
        }
      },
    });
    return null;
  }

  useEffect(() => {
    if (!start || !end) return;

    const fetchRoute = async () => {
      const res = await fetch(
        `https://router.project-osrm.org/route/v1/driving/${start[1]},${start[0]};${end[1]},${end[0]}?overview=full&geometries=geojson`,
      );
      const data = await res.json();

      const routeData = data.routes[0];

      const coordinates = routeData.geometry.coordinates.map(
        (c: [number, number]) => [c[1], c[0]],
      );

      const distanceKm = routeData.distance / 1000;
      setDistance(Number(distanceKm.toFixed(2)));

      const durationMin = routeData.duration / 60;
      setDuration(Math.round(durationMin));

      setRoute(coordinates);
    };

    fetchRoute();
  }, [start, end]);

  useEffect(() => {
    if (fromCurrentPosition) {
      const watchId = navigator.geolocation.watchPosition((pos) => {
        setUserLocation([pos.coords.latitude, pos.coords.longitude]);
      });

      return () => navigator.geolocation.clearWatch(watchId);
    }
  }, [fromCurrentPosition]);

  return (
    <Box className="relative w-full h-[calc(100vh-64px)]">
      <MapContainer
        center={
          destinationLat && destinationLng
            ? [destinationLat, destinationLng]
            : defaultCenter
        }
        zoom={13}
        className="h-full w-full z-0"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <ClickHandler />
        <FollowUser position={userLocation} />

        {start && (
          <Marker
            position={start}
            icon={L.divIcon({
              className: "",
              html: `<div style="
                width:16px;
                height:16px;
                background:blue;
                border-radius:50%;
                border:3px solid white;
              "></div>`,
            })}
          >
            <Tooltip>Start</Tooltip>
          </Marker>
        )}

        {end && (
          <Marker
            position={end}
            icon={L.divIcon({
              className: "",
              html: `<div style="
                width:16px;
                height:16px;
                background:red;
                border-radius:50%;
                border:3px solid white;
              "></div>`,
            })}
          >
            <Tooltip>Destination</Tooltip>
          </Marker>
        )}

        {route.length > 0 && (
          <Polyline
            positions={route}
            pathOptions={{ color: "green", weight: 5 }}
          >
            <Tooltip sticky>
              {distance} km • {duration} min
            </Tooltip>
          </Polyline>
        )}

        {userLocation && (
          <Marker
            position={userLocation}
            icon={L.divIcon({
              className: "",
              html: `<div style="
                width:16px;
                height:16px;
                background:#1E90FF;
                border-radius:50%;
                border:3px solid white;
              "></div>`,
            })}
          >
            <Tooltip>You</Tooltip>
          </Marker>
        )}
      </MapContainer>

      {(!start || !end) && (
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: 90,
            zIndex: 1000,
            bgcolor: "white",
            px: 3,
            py: 1.5,
            borderRadius: "999px",
            boxShadow: 4,
            minWidth: 220,
            textAlign: "center",
            transition: "all 0.3s ease",
          }}
        >
          {!start && (
            <Box sx={{ fontSize: "12px", fontWeight: 500, color: "#2e7d32" }}>
              Tap to select starting point
            </Box>
          )}
          {start && !end && (
            <Box sx={{ fontSize: "12px", fontWeight: 500, color: "#2e7d32" }}>
              Select destination
            </Box>
          )}
        </Box>
      )}

      {distance !== null && duration !== null && (
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: 20,
            zIndex: 1000,
            bgcolor: "white",
            px: 3,
            py: 2,
            borderRadius: "12px",
            boxShadow: 4,
            minWidth: 220,
            textAlign: "center",
            color: "black",
            mb: 5,
          }}
        >
          <div>
            <b>Distance:</b> {distance} km
          </div>
          <div>
            <b>Duration:</b> {duration} min
          </div>
        </Box>
      )}

      {(start || end) && (
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            setStart(null);
            setEnd(null);
            setRoute([]);
            setDistance(null);
            setDuration(null);
          }}
          sx={{
            position: "absolute",
            right: 10,
            top: 20,
            zIndex: 1000,
          }}
        >
          Reset
        </Button>
      )}
    </Box>
  );
}
