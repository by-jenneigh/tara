"use client";

import {
  Stack,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { EMERGENCY_HOTLINES } from "@/app/components/constants/hotlines";
import TopBar from "@/app/components/common/topbar";
import { useRouter } from "next/navigation";

export default function Emergency() {
  const router = useRouter();

  return (
    <Stack alignItems={"center"} spacing={2} py={5}>
      <TopBar label="Emergency Hotlines" onBackClick={() => router.back()} />

      {EMERGENCY_HOTLINES.map((item) => (
        <Accordion
          defaultExpanded
          key={item.town}
          sx={{ width: "100%", maxWidth: 600 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${item.town}-content`}
            id={`${item.town}-header`}
          >
            <Typography color="green" fontWeight="bold">
              {item.town}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={1}>
              {item.hotlines.map((hotline) => (
                <Stack
                  key={hotline.hotline}
                  direction="row"
                  spacing={2}
                  justifyContent="space-between"
                >
                  <Typography variant="body2">{hotline.entity}</Typography>
                  <Typography
                    fontWeight="bold"
                    variant="button"
                    color="primary"
                  >
                    {hotline.hotline}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  );
}
