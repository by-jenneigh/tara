"use client";

import { Box, CardActionArea, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { ReactNode } from "react";

type CategoryCardProps = {
  name: string;
  icon?: ReactNode;
  content?: string;
  onCardClick?: () => void;
};

export default function CategoryCard({
  name,
  icon,
  content,
  onCardClick,
}: CategoryCardProps) {
  return (
    <Card
      sx={{
        width: "100%",
        borderRadius: 3,
        overflow: "hidden",
        backgroundColor: "white",
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
            width: "100%",
            minHeight: 100,
            px: 3,
            py: 2,
            display: "flex",
            alignItems: "center",
            gap: 2,
            boxSizing: "border-box",
          }}
        >
          {/* Optional Icon */}
          {icon && (
            <Box
              sx={{
                width: 52,
                height: 52,
                minWidth: 52,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#e6f3fb",
                color: "#0b4778",
              }}
            >
              {icon}
            </Box>
          )}

          {/* Left-aligned Text */}
          <Box
            sx={{
              minWidth: 0,
              flex: 1,
              textAlign: "left",
            }}
          >
            <Typography
              variant="h6"
              fontWeight={600}
              color="#062b4f"
              sx={{
                lineHeight: 1.2,
              }}
            >
              {name}
            </Typography>

            {content && (
              <Typography
                variant="body2"
                sx={{
                  mt: 0.5,
                  color: "text.secondary",
                }}
              >
                {content}
              </Typography>
            )}
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
}
