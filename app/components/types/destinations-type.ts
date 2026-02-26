export enum DestinationType {
  religious = "Religious",
  recreational = "Recreational",
  historical = "Historical",
  nature = "Nature",
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
};
