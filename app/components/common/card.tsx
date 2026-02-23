import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

type DestinationCardProps = {
  name: string;
  image: string | ReactNode;
  description?: string;
};

export default function DestinationCard(props: DestinationCardProps) {
  const { name, image, description } = props;

  return (
    <Card sx={{ maxWidth: 142 }}>
      {typeof image === "string" ? (
        <CardMedia sx={{ height: 80 }} image={image} title={name} />
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
            sx={{ color: "text.secondary" }}
          >
            {description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
