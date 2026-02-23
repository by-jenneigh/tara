"use client";

import TopBar from "@/app/components/common/topbar";
import { Stack } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Fares() {
  const router = useRouter();

  return (
    <Stack alignItems={"center"}>
      <TopBar label="Fare Guide" onBackClick={() => router.back()} />
    </Stack>
  );
}
