import type { RoutesList } from '@interfaces/Routes.interface';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface RoutesState {
  currentRoute: RoutesList | null;
  data: RoutesList[] | null;
  error: null | string;
  loading: boolean;
}

const initialState: RoutesState = {
  currentRoute: null,
  data: null,
  error: null,
  loading: false,
};

export const routesSlice = createSlice({
  initialState,
  name: 'routes',
  reducers: {
    clearCurrentRoute: (state) => {
      state.currentRoute = null;
    },
    fetchRoutesFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    fetchRoutesStart: (state) => {
      state.error = null;
      state.loading = true;
    },
    fetchRoutesSuccess: (state, action: PayloadAction<RoutesList[]>) => {
      state.data = action.payload;
      state.error = null;
      state.loading = false;
    },
    setCurrentRoute: (state, action: PayloadAction<RoutesList>) => {
      state.currentRoute = action.payload;
    },
  },
});

export const GET_ROUTES = 'routes/fetchRoutesStart';

export const {
  clearCurrentRoute,
  fetchRoutesFailure,
  fetchRoutesStart,
  fetchRoutesSuccess,
  setCurrentRoute,
} = routesSlice.actions;

export default routesSlice.reducer;
