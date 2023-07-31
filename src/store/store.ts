import routeReducer from '@reducers/route.reducer';
import routesReducer from '@reducers/routes.reducer';
import { configureStore } from '@reduxjs/toolkit';
import root from '@sagas/index';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  reducer: {
    routeReducer,
    routesReducer,
  },
});

sagaMiddleware.run(root);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
