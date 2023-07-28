import { all, fork } from 'redux-saga/effects';

import { watchFetchRoutes } from './routes.saga';

export default function* root() {
  yield all([fork(watchFetchRoutes)]);
}
