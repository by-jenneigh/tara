"use client";

import {
  DESTINATION_TYPE_STYLES,
  DestinationType,
} from "@/app/components/types/destinations-type";
import { Box, CardActionArea, Chip } from "@mui/material";
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

  const isImage = typeof image === "string";

  return (
    <Card
      sx={{
        width: "100%",
        borderRadius: 4,
        overflow: "hidden",
      }}
    >
      <CardActionArea
        onClick={onCardClick}
        sx={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
          }}
        >
          {isImage ? (
            <CardMedia
              sx={{
                width: "100%",
                height: 100,
                objectFit: "cover",
              }}
              image={image as string}
              title={name}
            />
          ) : (
            <Box
              sx={{
                width: "100%",
                height: 80,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {image}
              </Box>
            </Box>
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

        <CardContent
          sx={{
            width: "100%",
            boxSizing: "border-box",
            py: 1.5,
            px: 2,
          }}
        >
          <Typography
            align={isImage ? "left" : "center"}
            variant="subtitle1"
            component="div"
            mb={content ? 1 : 0}
            lineHeight={1.2}
            fontWeight={600}
          >
            {name}
          </Typography>

          {content && (
            <Typography
              align={isImage ? "left" : "center"}
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
