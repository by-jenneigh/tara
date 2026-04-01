/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useMemo, useState, useEffect } from "react";
import BasicSelect from "@/app/components/common/select";
import TopBar from "@/app/components/common/topbar";
import { DESTINATIONS } from "@/app/components/constants/destinations";
import { ORIGINS } from "@/app/components/constants/origins";
import {
  Stack,
  Button,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Paper,
} from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";

export default function Fares() {
  const router = useRouter();

  const [origin, setOrigin] = useState<any>(null);
  const [destination, setDestination] = useState<any>(null);

  const searchParams = useSearchParams();
  const destinationParam = searchParams.get("destination");

  const selectedRoute = useMemo(() => {
    if (!origin || !destination) return null;

    return destination.fares?.find((route: any) => route.origin === origin.id);
  }, [origin, destination]);

  const mergedSteps = useMemo(() => {
    if (!selectedRoute) return [];

    const grouped = selectedRoute.steps.reduce(
      (acc: Map<string, any>, step: any) => {
        const key = `${step.from}|${step.to}`;
        const existing = acc.get(key);

        if (existing) {
          existing.options.push({
            vehicle: step.vehicle,
            minFare: step.minFare,
            maxFare: step.maxFare,
          });
        } else {
          acc.set(key, {
            from: step.from,
            to: step.to,
            options: [
              {
                vehicle: step.vehicle,
                minFare: step.minFare,
                maxFare: step.maxFare,
              },
            ],
          });
        }

        return acc;
      },
      new Map<string, any>(),
    );

    return Array.from(grouped.values());
  }, [selectedRoute]);

  const totalFare = useMemo(() => {
    if (!selectedRoute) return null;

    const min = selectedRoute.steps.reduce(
      (sum: number, step: any) => sum + step.minFare,
      0,
    );

    const max = selectedRoute.steps.reduce(
      (sum: number, step: any) => sum + step.maxFare,
      0,
    );

    return { min, max };
  }, [selectedRoute]);

  const handleReset = () => {
    setOrigin(null);
    setDestination(null);
  };

  useEffect(() => {
    if (!destinationParam) return;

    const match = DESTINATIONS.find((dest) => dest.id === destinationParam);

    if (match) {
      setDestination(match);
    }
  }, [destinationParam]);

  return (
    <Stack spacing={3} mt={5}>
      <TopBar label="Fare Guide" onBackClick={() => router.back()} />

      <Stack
        spacing={4}
        px={2}
        sx={{ width: "100%", maxWidth: 600, mx: "auto" }}
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

        <Button
          variant="outlined"
          sx={{ backgroundColor: "green", color: "white" }}
          onClick={handleReset}
        >
          Reset
        </Button>

        {selectedRoute && (
          <Paper sx={{ p: 2 }}>
            <Typography fontWeight="bold" mb={2}>
              Route Details
            </Typography>

            <Stepper orientation="vertical">
              {mergedSteps.map((step: any, index: number) => (
                <Step key={index} active>
                  <StepLabel>
                    <Stack>
                      <Typography fontWeight="bold">
                        {step.from} → {step.to}
                      </Typography>

                      {step.options.map((option: any, optionIndex: number) => (
                        <Typography key={optionIndex} variant="body2">
                          {option.vehicle} • ₱{option.minFare} - ₱
                          {option.maxFare}
                        </Typography>
                      ))}
                    </Stack>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>

            {totalFare && (
              <Typography mt={2} fontWeight="bold" color="green">
                Total Fare: ₱{totalFare.min} - ₱{totalFare.max}
              </Typography>
            )}
          </Paper>
        )}

        {origin && destination && !selectedRoute && (
          <Typography color="text.secondary">
            No available route for this origin.
          </Typography>
        )}
      </Stack>
    </Stack>
  );
}
