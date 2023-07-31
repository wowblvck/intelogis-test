import { all, fork } from 'redux-saga/effects';

import { watchRoute } from './route.saga';
import { watchRoutes } from './routes.saga';

export default function* root() {
  yield all([fork(watchRoutes), fork(watchRoute)]);
}
