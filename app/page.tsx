import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

export default function Landing() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-white">
      <main className="flex min-h-screen w-full flex-col items-center justify-center py-32 px-16 bg-white dark:bg-white">
        <Image alt="tara logo" src={"/logo.png"} width={200} height={200} />

        <Box className="mt-4">
          <Typography align="center" variant="h1" color="black">
            TARA
          </Typography>
          <Typography align="center" variant="body1" color="black">
            Travel and Route Assistance
          </Typography>
        </Box>

        <Box mt={20}>
          <Button href="/home" variant="contained" color="success" size="large">
            Get Started
          </Button>
        </Box>
      </main>
    </div>
  );
}
