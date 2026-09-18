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
    <Box sx={{ flexGrow: 1, width: "100%", minHeight: 50 }}>
      <AppBar
        color="default"
        enableColorOnDark
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.appBar }}
      >
        <Toolbar
          sx={{
            position: "relative",
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="back"
            onClick={onBackClick}
            sx={{
              mr: 2,
              zIndex: 1,
            }}
          >
            <ArrowBackIcon />
          </IconButton>

          <Typography
            variant="h5"
            component="div"
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
