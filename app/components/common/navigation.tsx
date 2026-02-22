import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PlaceIcon from "@mui/icons-material/Place";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AssistantNavigationIcon from "@mui/icons-material/AssistantNavigation";
import InfoIcon from "@mui/icons-material/Info";

export default function Navigation() {
  return (
    <Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation showLabels>
          <BottomNavigationAction
            href="/home"
            label="Home"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            href="/destinations"
            label="Destinations"
            icon={<PlaceIcon />}
          />
          <BottomNavigationAction
            href="/fares"
            label="Fares"
            icon={<AccountBalanceWalletIcon />}
          />
          <BottomNavigationAction
            href="/navigation"
            label="Navigation"
            icon={<AssistantNavigationIcon />}
          />
          <BottomNavigationAction
            href="/about"
            label="About"
            icon={<InfoIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
