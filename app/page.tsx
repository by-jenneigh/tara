import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

export default function Landing() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full flex-col items-center justify-center py-32 px-16 bg-none">
        <Box>
          <Image alt="tara logo" src={"/logo.png"} width={200} height={200} />
        </Box>

        <Box className="mt-4">
          <Typography
            align="center"
            variant="h1"
            color="white"
            sx={{ textShadow: "0 12px 18px rgba(0, 0, 0, 0.35)" }}
          >
            TARA
          </Typography>
          <Typography
            align="center"
            variant="body1"
            fontWeight={"bold"}
            color="white"
            sx={{ textShadow: "0 12px 18px rgba(0, 0, 0, 0.35)" }}
          >
            Travel and Route Assistance
          </Typography>
        </Box>

        <Box mt={20}>
          <Button
            href="/home"
            variant="contained"
            color="success"
            size="large"
            sx={{ boxShadow: "0 12px 18px rgba(0, 0, 0, 0.35)" }}
          >
            Get Started
          </Button>
        </Box>
      </main>
    </div>
  );
}
