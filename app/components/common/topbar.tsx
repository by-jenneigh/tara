import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

type TopBarProps = {
  label: string;
  onBackClick: () => void;
};

export default function TopBar(props: TopBarProps) {
  const { label, onBackClick } = props;

  return (
    <Box sx={{ flexGrow: 1, width: "100%" }} mb={5}>
      <AppBar
        color="default"
        enableColorOnDark
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.appBar }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={onBackClick}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography
            align="center"
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            {label}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
