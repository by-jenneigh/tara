"use client";

import TopBar from "@/app/components/common/topbar";
import { Stack, Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  return (
    <Stack spacing={2}>
      <TopBar label="About / Help" onBackClick={() => router.back()} />

      <Box>
        <Typography color="black" variant="h5">
          About Tara
        </Typography>
        <Typography align="justify" color="black" variant="body2" mt={2}>
          TARA: A Travel and Route Assistance Platform for Tourist Navigation
          and Transportation Fare Guidance is a mobile-first web application
          developed to centralize tourism destination information, route
          navigation assistance, and transportation fare guidance within the
          municipalities of Cabatuan, Maasin, and Janiuay, Iloilo. The platform
          was created to address the absence of an integrated and localized
          digital system that combines structured destination details with
          transportation guidance in municipal settings. TARA provides organized
          destination profiles, route visualization through web-based mapping
          services, and transportation fare references specifically for routes
          leading to selected tourist attractions. It assists tourists and
          visitors in planning travel routes, identifying available
          transportation modes, and estimating travel costs within the covered
          municipalities. TARA functions solely as an informational
          travel-assistance tool and does not replace general navigation
          platforms; rather, it enhances travel planning efficiency and improves
          accessibility to tourism sites through a mobile-optimized web
          environment.
        </Typography>
      </Box>

      <Box>
        <Typography color="black" variant="h5">
          Covered Municipalities
        </Typography>
        <Typography ml={2} align="justify" color="black" variant="body2" mt={2}>
          <li>Cabatuan</li>
          <li>Maasin</li>
          <li>Janiuay</li>
        </Typography>
      </Box>
      <Box>
        <Typography color="black" variant="h5">
          Data and Information Sources
        </Typography>
        <Typography align="justify" color="black" variant="body2" mt={2}>
          The tourism and transportation information presented in TARA is based
          on official data collected from the Municipal Tourism Offices and
          Local Government Units (LGUs) of Cabatuan, Maasin, and Janiuay,
          Iloilo. Tourist destination details were obtained directly from these
          municipal offices, while transportation route information and fare
          references for selected destinations were gathered from the respective
          municipal offices and validated using available regulatory references
          from the Land Transportation Franchising and Regulatory Board (LTFRB).
          All collected data were carefully reviewed, verified, and organized
          prior to integration into the platform. The overall accuracy of the
          information depends on the official records and documentation provided
          during the research and data collection period.
        </Typography>
      </Box>

      <Box>
        <Typography color="black" variant="h5">
          Important Disclaimer
        </Typography>
        <Typography align="justify" color="black" variant="body2" mt={2}>
          TARA is an informational travel-assistance platform designed to
          support tourists visiting selected destinations in Cabatuan, Maasin,
          and Janiuay, Iloilo. The platform provides transportation fare
          guidance solely for routes leading to these tourist destinations,
          based on official data collected from municipal offices, LGUs,
          transport operators, and the Land Transportation Franchising and
          Regulatory Board (LTFRB). The system does not provide real-time
          transportation monitoring, GPS-based vehicle tracking, traffic-aware
          routing, or offline access. Users must have an active internet
          connection to access mapping services and retrieve tourism and
          transportation data. While the platform presents verified information
          from official sources, it should be used solely as a supplementary
          guide and not as a substitute for confirming actual fares, routes, or
          transportation arrangements.
        </Typography>
      </Box>
    </Stack>
  );
}
