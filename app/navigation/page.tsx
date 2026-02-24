"use client";

import Map from "@/app/components/common/map";
import TopBar from "@/app/components/common/topbar";
import { Stack } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const router = useRouter();

  return (
    <Stack alignItems={"center"}>
      <TopBar label="Navigation" onBackClick={() => router.back()} />

      <Map />
    </Stack>
  );
}
