export type RouteStep = {
  from: string;
  to: string;
  vehicle: "Jeep" | "Bus" | "Tricycle" | "Motorcycle";
  minFare: number;
  maxFare: number;
};

export type DestinationRoute = {
  destinationId: string;
  routes: {
    origin: string;
    steps: RouteStep[];
  }[];
};
