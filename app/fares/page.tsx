/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import BasicSelect from "@/app/components/common/select";
import TopBar from "@/app/components/common/topbar";
import { DESTINATIONS } from "@/app/components/constants/destinations";
import { ORIGINS } from "@/app/components/constants/origins";
import {
  Stack,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useRouter } from "next/navigation";

const VEHICLE_RATES = {
  Tricycle: { min: 15, perKm: 5 },
  Jeep: { min: 12, perKm: 3 },
  Bus: { min: 10, perKm: 2 },
  Motorcycle: { min: 5, perKm: 1 },
};

export function getDistanceKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
) {
  const R = 6371; // Earth radius km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;

  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

export default function Fares() {
  const router = useRouter();

  const [origin, setOrigin] = useState<any>(null);
  const [destination, setDestination] = useState<any>(null);
  const [fareResult, setFareResult] = useState<any[]>([]);

  const handleCalculate = () => {
    if (!origin || !destination) return;

    // For ORIGINS, use lat/lng directly; for DESTINATIONS, use mapLocation
    const originLat = origin.lat || origin.mapLocation?.lat;
    const originLng = origin.lng || origin.mapLocation?.lng;

    const distance = getDistanceKm(
      originLat,
      originLng,
      destination.mapLocation.lat,
      destination.mapLocation.lng,
    );

    const results = Object.entries(VEHICLE_RATES).map(([vehicle, rate]) => {
      const minFare = rate.min;
      const maxFare = rate.min + distance * rate.perKm;

      return {
        vehicle,
        distance: distance.toFixed(2),
        minFare: minFare.toFixed(2),
        maxFare: maxFare.toFixed(2),
      };
    });

    setFareResult(results);
  };

  const handleReset = () => {
    setOrigin(null);
    setDestination(null);
    setFareResult([]);
  };

  return (
    <Stack spacing={3} mt={5}>
      <TopBar label="Fare Guide" onBackClick={() => router.back()} />

      <Stack
        spacing={5}
        px={2}
        sx={{ width: "100%", maxWidth: 600, mx: "auto" }}
        alignItems={"center"}
      >
        <BasicSelect
          options={ORIGINS}
          value={origin}
          label="Origin"
          onChange={setOrigin}
        />

        <BasicSelect
          options={DESTINATIONS}
          label="Destination"
          onChange={setDestination}
          value={destination}
        />

        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            color="success"
            fullWidth
            onClick={handleCalculate}
          >
            Calculate
          </Button>

          <Button variant="outlined" fullWidth onClick={handleReset}>
            Reset
          </Button>
        </Stack>

        {
          <Paper elevation={3}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Vehicle</TableCell>
                  <TableCell>Distance (km)</TableCell>
                  <TableCell>Min Fare</TableCell>
                  <TableCell>Max Fare</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {fareResult.map((row) => (
                  <TableRow key={row.vehicle}>
                    <TableCell>{row.vehicle}</TableCell>
                    <TableCell>{row.distance}</TableCell>
                    <TableCell>₱{row.minFare}</TableCell>
                    <TableCell>₱{row.maxFare}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        }
      </Stack>
    </Stack>
  );
}
