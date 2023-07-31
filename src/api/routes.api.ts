import type { RoutesOSRM } from '@interfaces/OSRM.interface';
import type { RoutesList } from '@interfaces/Routes.interface';

import { API } from '@constants/appConfig';
import axios from 'axios';

const getRoutesFromAPI = () =>
  axios.get<RoutesList[]>(`${API}/routes`, {
    timeout: 5000,
  });

const getGeometryFromAPI = (points: string) =>
  axios.get<RoutesOSRM>(
    `https://router.project-osrm.org/route/v1/driving/${points}?geometries=polyline&overview=simplified`
  );

export { getGeometryFromAPI, getRoutesFromAPI };
