"use client";

import DestinationCard from "@/app/components/common/card";
import Search from "@/app/components/common/search";
import { DESTINATIONS } from "@/app/components/constants/destinations";
import { FEATURES } from "@/app/components/constants/features";
import { Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  return (
    <Stack alignItems="center" sx={{ width: "100%" }}>
      <Stack alignItems="center" mb={5}>
        <Typography variant="h6" color="white" align="center" fontWeight="bold">
          Explore the 3rd District of Iloilo
        </Typography>
      </Stack>

      {/* Features */}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={12}
        sx={{
          width: "100%",
          maxWidth: 1300,
          mb: 5,
        }}
      >
        {FEATURES.map((feature, idx) => (
          <Grid key={idx} size={{ xs: 6 }}>
            <DestinationCard
              name={feature.name}
              content={feature.about}
              image={feature.icon}
              onCardClick={() => router.push(feature.path)}
            />
          </Grid>
        ))}
      </Grid>

      {/* Featured Destinations */}
      <Stack
        sx={{
          width: "100%",
          maxWidth: 1300,
        }}
      >
        <Typography color="white" variant="h6" fontWeight="bold" mb={2}>
          Featured Destinations
        </Typography>

        <Grid container spacing={{ xs: 2, md: 3 }} columns={12}>
          {DESTINATIONS.slice(0, 2).map((destination, idx) => (
            <Grid key={idx} size={{ xs: 6 }}>
              <DestinationCard
                name={destination.name}
                image={destination.images[0]}
                onCardClick={() => {
                  router.push(`/destinations/${destination.id}`);
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
}
