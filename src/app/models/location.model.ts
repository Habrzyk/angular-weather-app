export interface LocationFromApi {
  items: Location[];
}

export interface Location {
  id: string;
  title: string;
  localityType: string;
  position: Position;
}

export interface Position {
  lat: number;
  lng: number;
}
