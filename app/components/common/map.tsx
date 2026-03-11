"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  useMap,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";

const defaultCenter: [number, number] = [14.5995, 120.9842];

function FollowUser({ position }: { position: [number, number] | null }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView(position, 16);
    }
  }, [position, map]);

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
  const [fare, setFare] = useState<number | null>(null);

  useEffect(() => {
    if (!destinationLat || !destinationLng) return;

    if (!fromCurrentPosition) {
      setStart(null);
      setRoute([]);
      setFare(null);
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

      const coordinates = data.routes[0].geometry.coordinates.map(
        (c: [number, number]) => [c[1], c[0]],
      );

      const distanceMeters = data.routes[0].distance;
      const distanceKm = distanceMeters / 1000;

      const computedFare = 13 + Math.max(0, distanceKm - 4) * 1.5;

      setRoute(coordinates);
      setFare(Number(computedFare.toFixed(2)));
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
          />
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
          />
        )}
        {route.length > 0 && (
          <Polyline
            positions={route}
            pathOptions={{ color: "green", weight: 5 }}
          />
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
          />
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

      {(start || end) && (
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            setStart(null);
            setEnd(null);
            setRoute([]);
            setFare(null);
          }}
          sx={{
            position: "absolute",
            right: 5,
            transform: "translateX(-50%)",
            top: 60,
            zIndex: 1000,
            px: 2,
            py: 1,
            boxShadow: 3,
          }}
        >
          Reset
        </Button>
      )}
    </Box>
  );
}
