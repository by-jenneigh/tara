import DestinationCard from "@/app/components/common/card";
import Search from "@/app/components/common/search";
import { DESTINATIONS } from "@/app/components/constants/destinations";
import { Grid, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <Stack alignItems={"center"}>
      <Stack alignContent={"center"} mb={5}>
        <Typography variant="h6" color="black" align="center">
          Explore the 3rd District of Iloilo
        </Typography>

        <Search />
      </Stack>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Typography color="black" variant="body1">
          Featured Destinations
        </Typography>
        {DESTINATIONS.map((destination, idx) => (
          <DestinationCard
            key={idx}
            name={destination.name}
            image={destination.images[0]}
          />
        ))}
      </Grid>
    </Stack>
  );
}
