export enum DestinationType {
  religious = "Religious",
  recreational = "Recreational",
  historical = "Historical",
  nature = "Nature",
  food = "Food",
}

export const DESTINATION_TYPE_STYLES: Record<
  DestinationType,
  {
    color: "primary" | "secondary" | "success" | "error" | "warning" | "info";
  }
> = {
  [DestinationType.religious]: { color: "secondary" },
  [DestinationType.recreational]: { color: "info" },
  [DestinationType.historical]: { color: "warning" },
  [DestinationType.nature]: { color: "success" },
  [DestinationType.food]: { color: "error" },
};

export type Destination = {
  id: string;
  name: string;
  about: string;
  type: DestinationType;
  images: string[];
  town: string;
  mapLocation: Record<string, number>;
};
