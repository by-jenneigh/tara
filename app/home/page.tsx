import Search from "@/app/components/common/search";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Box alignContent={"center"}>
        <Typography variant="h6" color="black" align="center">
          Explore the 3rd District of Iloilo
        </Typography>

        <Search />
      </Box>
    </Box>
  );
}
