import PlaceIcon from "@mui/icons-material/Place";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AssistantNavigationIcon from "@mui/icons-material/AssistantNavigation";
import EmergencyIcon from "@mui/icons-material/Emergency";

export const FEATURES = [
  {
    name: "Explore Destinations",
    about: "Discover Beautiful Places",
    icon: <PlaceIcon fontSize="large" color="primary" />,
    path: "/destinations",
  },
  {
    name: "Check Official Fares",
    about: "LTFRB Approved Fare Rates",
    icon: <AccountBalanceWalletIcon fontSize="large" color="warning" />,
    path: "/fares",
  },
  {
    name: "Navigate Routes",
    about: "Plan Your Journey",
    icon: <AssistantNavigationIcon fontSize="large" color="success" />,
    path: "/navigation",
  },
  {
    name: "Emergency Hotlines",
    about: "Get Help When You Need It",
    icon: <EmergencyIcon fontSize="large" color="error" />,
    path: "/emergency",
  },
];
