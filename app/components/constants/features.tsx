import PlaceIcon from "@mui/icons-material/Place";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AssistantNavigationIcon from "@mui/icons-material/AssistantNavigation";

export const FEATURES = [
  {
    name: "Explore Destinations",
    about: "Discover Beautiful Places",
    icon: <PlaceIcon fontSize="large" />,
    path: "/destinations",
  },
  {
    name: "Check Official Fares",
    about: "LTFRB Approved Fare Rates",
    icon: <AccountBalanceWalletIcon fontSize="large" />,
    path: "/fares",
  },
  {
    name: "Navigate Routes",
    about: "Plan Your Journey",
    icon: <AssistantNavigationIcon fontSize="large" />,
    path: "/navigation",
  },
];
