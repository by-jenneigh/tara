"use client";

import DestinationCard from "@/app/components/common/card";
import Search from "@/app/components/common/search";
import { DESTINATIONS } from "@/app/components/constants/destinations";
import { FEATURES } from "@/app/components/constants/features";
import { Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <Stack alignItems={"center"}>
      <Stack alignContent={"center"} mb={5}>
        <Typography variant="h6" color="black" align="center">
          Explore the 3rd District of Iloilo
        </Typography>

        <Search options={DESTINATIONS} />
      </Stack>

      <Grid
        mb={5}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {FEATURES.map((feature, idx) => (
          <DestinationCard
            key={idx}
            name={feature.name}
            content={feature.about}
            image={feature.icon}
            onCardClick={() => router.push(feature.path)}
          />
        ))}
      </Grid>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Typography color="black" variant="body1">
          Featured Destinations
        </Typography>
        {DESTINATIONS.slice(0, 2).map((destination, idx) => (
          <DestinationCard
            key={idx}
            name={destination.name}
            image={destination.images[0]}
            onCardClick={() => {
              router.push(`/destinations/${destination.id}`);
            }}
          />
        ))}
      </Grid>
    </Stack>
  );
}
