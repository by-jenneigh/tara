"use client";

import DestinationCard from "@/app/components/common/card";
import Search from "@/app/components/common/search";
import TopBar from "@/app/components/common/topbar";
import { DESTINATIONS } from "@/app/components/constants/destinations";
import { Grid, Stack } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Destinations() {
  const router = useRouter();

  return (
    <Stack alignItems={"center"} className="pt-12 pb-30">
      <TopBar label="Destinations" onBackClick={() => router.back()} />
      <Stack alignContent={"center"} mb={5}>
        <Search />
      </Stack>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {DESTINATIONS.map((destination, idx) => (
          <DestinationCard
            key={idx}
            name={destination.name}
            content={destination.town}
            image={destination.images[0]}
            type={destination.type}
            onCardClick={() => {
              router.push(`/destinations/${destination.id}`);
            }}
          />
        ))}
      </Grid>
    </Stack>
  );
}
