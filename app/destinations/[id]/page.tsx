"use client";

import TopBar from "@/app/components/common/topbar";
import { DESTINATIONS } from "@/app/components/constants/destinations";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { use, useMemo } from "react";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import {
  DESTINATION_TYPE_STYLES,
  DestinationType,
} from "@/app/components/types/destinations-type";
import { LocationCityRounded } from "@mui/icons-material";

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

  const images = DESTINATION_DETAILS?.images ?? ["/placeholder_image.jpg"];
  const safeDestinationType =
    DESTINATION_DETAILS?.type || DestinationType.recreational;

  return (
    <Stack alignItems={"center"}>
      <TopBar label="Destination Details" onBackClick={() => router.back()} />

      <Card sx={{ width: "100vw" }} className="pb-30">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          style={{ width: "100%", height: 300 }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <CardMedia
                component="img"
                image={img}
                alt={`destination-image-${index}`}
                sx={{ height: 300, objectFit: "cover" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {DESTINATION_DETAILS?.name}
          </Typography>

          <Stack spacing={1} direction={"row"} pb={2}>
            <Chip
              label={safeDestinationType}
              color={DESTINATION_TYPE_STYLES[safeDestinationType].color}
            />
            <Chip
              label={DESTINATION_DETAILS?.town}
              icon={<LocationCityRounded />}
            />
          </Stack>

          <Typography
            align="justify"
            variant="body2"
            sx={{ color: "text.secondary" }}
          >
            {DESTINATION_DETAILS?.about?.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
                <br />
              </span>
            ))}
          </Typography>

          {DESTINATION_DETAILS?.contact && (
            <Stack mt={1} direction={"row"} spacing={1}>
              <ContactPhoneIcon color="primary" />
              <Typography fontWeight={"bold"} color="primary" pb={1}>
                CONTACT
              </Typography>
            </Stack>
          )}

          {DESTINATION_DETAILS?.contact &&
            DESTINATION_DETAILS.contact.map((item) => (
              <Stack key={item.entity} direction={"row"} spacing={1}>
                <Typography variant="body1">{`${item.entity}:`}</Typography>
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
