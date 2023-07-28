interface Point {
  location: number[];
  name: string;
}

interface RoutesList {
  id: number;
  name: string;
  points: Point[];
}

export type { Point, RoutesList };
