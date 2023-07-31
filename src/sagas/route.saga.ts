import type { ErrorOSRM, RoutesOSRM } from '@interfaces/OSRM.interface';
import type { RoutesList } from '@interfaces/Routes.interface';

import { getGeometryFromAPI } from '@api/routes.api';
import {
  fetchCurrentRoute,
  fetchCurrentRouteError,
  fetchCurrentRouteSuccess,
} from '@reducers/route.reducer';
import { RootState } from '@store/store';
import { convertPointsToString } from '@utils/helperFunctions';
import axios, { AxiosResponse } from 'axios';
import { call, put, select, takeLatest } from 'redux-saga/effects';

function* fetchRouteGeometry() {
  try {
    const currentRoute = (yield select(
      (state: RootState) => state.routeReducer.currentRoute
    )) as RoutesList;

    const convertedPoints = convertPointsToString(currentRoute.points);
    const response = (yield call(getGeometryFromAPI, convertedPoints)) as AxiosResponse;
    const data = response.data as RoutesOSRM;
    yield put(fetchCurrentRouteSuccess(data.routes[0].geometry as string));
  } catch (error) {
    if (axios.isAxiosError<ErrorOSRM>(error)) {
      if (error.response) {
        yield put(fetchCurrentRouteError(error.response.data.message));
      } else {
        yield put(fetchCurrentRouteError(error.message));
      }
    }
  }
}

export function* watchRoute() {
  yield takeLatest(fetchCurrentRoute.type, fetchRouteGeometry);
}
