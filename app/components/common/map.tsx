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
}: {
  destinationLat?: number;
  destinationLng?: number;
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

    navigator.geolocation.getCurrentPosition((pos) => {
      const current: [number, number] = [
        pos.coords.latitude,
        pos.coords.longitude,
      ];

      setUserLocation(current);
      setStart(current);
      setEnd([destinationLat, destinationLng]);
    });
  }, [destinationLat, destinationLng]);

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
    const watchId = navigator.geolocation.watchPosition((pos) => {
      setUserLocation([pos.coords.latitude, pos.coords.longitude]);
    });

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return (
    <div className="relative w-full h-[calc(100vh-64px)]">
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
        <div className="absolute bottom-15 left-0 w-full bg-white rounded-t-3xl shadow-2xl p-5 z-50">
          {!start && <p className="text-gray-500">Select starting point</p>}
          {start && !end && (
            <p className="text-gray-500">Now select destination</p>
          )}
        </div>
      )}

      {(start || end) && (
        <button
          onClick={() => {
            setStart(null);
            setEnd(null);
            setRoute([]);
            setFare(null);
          }}
          className="absolute right-4 bottom-15 z-50 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg"
        >
          Reset
        </button>
      )}
    </div>
  );
}
