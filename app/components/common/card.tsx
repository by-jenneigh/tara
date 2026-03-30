"use client";

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
  content?: string;
  type?: DestinationType;
  onCardClick?: () => void;
};

export default function DestinationCard(props: DestinationCardProps) {
  const { name, image, content, onCardClick, type } = props;

  return (
    <Card sx={{ maxWidth: 140, borderRadius: 4 }}>
      <CardActionArea onClick={onCardClick}>
        <Box sx={{ position: "relative" }}>
          {typeof image === "string" ? (
            <CardMedia sx={{ height: 100 }} image={image} title={name} />
          ) : (
            <CardMedia
              sx={{
                width: 150,
                height: 60,
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
            align={typeof image === "string" ? "left" : "center"}
            gutterBottom
            variant="subtitle1"
            component="div"
            mb={1}
            lineHeight={1}
          >
            {name}
          </Typography>
          {content && (
            <Typography
              align={typeof image === "string" ? "left" : "center"}
              variant="body2"
              sx={{
                color: "text.secondary",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {content}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
