import type { RoutesList } from '@interfaces/Routes.interface';

import axios from 'axios';

const getRoutesFromAPI = () => axios.get<RoutesList[]>('/routes.json', { timeout: 5000 });

export { getRoutesFromAPI };
