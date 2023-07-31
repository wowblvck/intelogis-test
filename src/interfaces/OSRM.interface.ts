import { RouteResults } from 'osrm';

interface RoutesOSRM extends RouteResults {
  code: string;
}

interface ErrorOSRM {
  code: string;
  message: string;
}

export type { ErrorOSRM, RoutesOSRM };
