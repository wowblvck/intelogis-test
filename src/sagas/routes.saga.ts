import type { RoutesList } from '@interfaces/Routes.interface';

import { getRoutesFromAPI } from '@api/routes.api';
import { fetchRoutesFailure, fetchRoutesStart, fetchRoutesSuccess } from '@reducers/routes.reducer';
import { AxiosError, AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

function* fetchRoutes() {
  try {
    const response = (yield call(getRoutesFromAPI)) as AxiosResponse;
    const data = response.data as RoutesList[];
    yield put(fetchRoutesSuccess(data));
  } catch (error) {
    if (error instanceof AxiosError) {
      yield put(fetchRoutesFailure(error.message));
    }
  }
}

export function* watchRoutes() {
  yield takeLatest(fetchRoutesStart.type, fetchRoutes);
}
