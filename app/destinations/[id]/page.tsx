"use client";

import TopBar from "@/app/components/common/topbar";
import { DESTINATIONS } from "@/app/components/constants/destinations";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { use, useMemo } from "react";
import EmergencyIcon from "@mui/icons-material/Emergency";

export default function Destination({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const { id } = use(params);

  const DESTINATION_DETAILS = useMemo(() => {
    return DESTINATIONS.find((destination) => destination.id === id);
  }, [id]);

  return (
    <Stack alignItems={"center"}>
      <TopBar label="Destination Details" onBackClick={() => router.back()} />

      <Card sx={{ width: "100vw" }} className="pb-30">
        <CardMedia
          sx={{ height: 300 }}
          image="/placeholder_image.jpg"
          title="destination image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {DESTINATION_DETAILS?.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {DESTINATION_DETAILS?.about}
          </Typography>

          {DESTINATION_DETAILS?.emergencyHotlines && (
            <Stack mt={3} direction={"row"} spacing={1}>
              <EmergencyIcon color="error" />
              <Typography fontWeight={"bold"} color="#d21e2a" pb={1}>
                EMERGENCY HOTLINES
              </Typography>
            </Stack>
          )}

          {DESTINATION_DETAILS?.emergencyHotlines &&
            DESTINATION_DETAILS.emergencyHotlines.map((item) => (
              <Stack key={item.entity} direction={"row"} spacing={1}>
                <Typography variant="body2">{`${item.entity}:`}</Typography>
                <Typography fontWeight={"bold"} variant="button">
                  {item.hotline}
                </Typography>
              </Stack>
            ))}
        </CardContent>
        <CardActions sx={{ width: "100%" }}>
          <Stack spacing={2} sx={{ width: "100%", px: 2 }}>
            <Button
              sx={{ height: 40 }}
              color="success"
              variant="contained"
              size="small"
              fullWidth
              onClick={() =>
                router.push(
                  `/navigation?lat=${DESTINATION_DETAILS?.mapLocation.lat}&lng=${DESTINATION_DETAILS?.mapLocation.lng}`,
                )
              }
            >
              Start Navigation
            </Button>
            <Button
              sx={{ height: 40 }}
              variant="contained"
              size="small"
              fullWidth
              onClick={() => router.push("/navigation")}
            >
              View Map
            </Button>
            <Button
              variant="outlined"
              size="small"
              fullWidth
              sx={{ borderColor: "gray", color: "gray", height: 40 }}
              onClick={() => router.push("/fares")}
            >
              Check Fare
            </Button>
          </Stack>
        </CardActions>
      </Card>
    </Stack>
  );
}
