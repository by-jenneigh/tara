import Search from "@/app/components/common/search";
import { Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <Stack alignItems={"center"}>
      <Stack alignContent={"center"}>
        <Typography variant="h6" color="black" align="center">
          Explore the 3rd District of Iloilo
        </Typography>

        <Search />
      </Stack>
    </Stack>
  );
}
