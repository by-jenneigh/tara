import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

type DestinationCardProps = {
  name: string;
  image: string;
  description?: string;
};

export default function DestinationCard(props: DestinationCardProps) {
  const { name, image, description } = props;

  return (
    <Card sx={{ maxWidth: 142 }}>
      <CardMedia sx={{ height: 30 }} image={image} title={name} />
      <CardContent>
        <Typography gutterBottom variant="body1" component="div">
          {name}
        </Typography>
        {description && (
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
