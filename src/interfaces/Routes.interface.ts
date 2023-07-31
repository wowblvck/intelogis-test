interface Point {
  id: string;
  location: [number, number];
  name: string;
  routeId: string;
}

interface RoutesList {
  id: string;
  name: string;
  points: Point[];
}

export type { Point, RoutesList };
