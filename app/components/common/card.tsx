import {
  DESTINATION_TYPE_STYLES,
  DestinationType,
} from "@/app/components/types/destinations-type";
import { CardActionArea, Box, Chip } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

type DestinationCardProps = {
  name: string;
  image: string | ReactNode;
  description?: string;
  type?: DestinationType;
  onCardClick?: () => void;
};

export default function DestinationCard(props: DestinationCardProps) {
  const { name, image, description, onCardClick, type } = props;

  return (
    <Card sx={{ maxWidth: 142 }}>
      <CardActionArea onClick={onCardClick}>
        <Box sx={{ position: "relative" }}>
          {typeof image === "string" ? (
            <CardMedia sx={{ height: 100 }} image={image} title={name} />
          ) : (
            <CardMedia
              sx={{
                width: 150,
                height: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {image}
            </CardMedia>
          )}

          {type && (
            <Chip
              label={type}
              size="small"
              color={DESTINATION_TYPE_STYLES[type].color}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                fontWeight: 500,
                backdropFilter: "blur(4px)",
              }}
            />
          )}
        </Box>
        <CardContent>
          <Typography
            align="center"
            gutterBottom
            variant="body1"
            component="div"
            mb={0}
          >
            {name}
          </Typography>
          {description && (
            <Typography
              align="center"
              variant="body2"
              sx={{
                color: "text.secondary",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {description}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
