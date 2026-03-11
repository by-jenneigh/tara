"use client";

import TopBar from "@/app/components/common/topbar";
import { Stack } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/app/components/common/map"), {
  ssr: false,
});

export default function Navigation() {
  const searchParams = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const fromCurrentPosition =
    searchParams.get("fromCurrentPosition") === "true" ? true : false;
  const router = useRouter();

  return (
    <Stack alignItems={"center"}>
      <TopBar label="Navigation" onBackClick={() => router.back()} />

      <Map
        destinationLat={lat ? Number(lat) : undefined}
        destinationLng={lng ? Number(lng) : undefined}
        fromCurrentPosition={fromCurrentPosition}
      />
    </Stack>
  );
}
