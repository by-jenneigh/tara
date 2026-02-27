"use client";

import { useMemo, useState } from "react";
import DestinationCard from "@/app/components/common/card";
import Search from "@/app/components/common/search";
import TopBar from "@/app/components/common/topbar";
import { DESTINATIONS } from "@/app/components/constants/destinations";
import { Grid, Stack } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Destinations() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter((d) =>
      d.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }, [searchValue]);

  return (
    <Stack className="pt-12 pb-30">
      <TopBar label="Destinations" onBackClick={() => router.back()} />

      <Stack
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          bgcolor: "#d1f3c5",
          pt: 2,
          pb: 2,
        }}
      >
        <Search
          options={DESTINATIONS}
          onInputChange={setSearchValue}
          onSelect={(destination) => {
            if (destination) {
              router.push(`/destinations/${destination.id}`);
            }
          }}
        />
      </Stack>

      <Stack>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {filteredDestinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              name={destination.name}
              content={destination.town}
              image={destination.images[0]}
              type={destination.type}
              onCardClick={() => router.push(`/destinations/${destination.id}`)}
            />
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
}
