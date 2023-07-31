import type { RoutesList } from '@interfaces/Routes.interface';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface RouteState {
  currentRoute: RoutesList | null;
  error: null | string;
  geometry: null | string;
  loading: boolean;
}

const initialState: RouteState = {
  currentRoute: null,
  error: null,
  geometry: null,
  loading: false,
};

export const routeSlice = createSlice({
  initialState,
  name: 'route',
  reducers: {
    clearCurrentRoute: (state) => {
      state.currentRoute = null;
      state.geometry = null;
    },
    fetchCurrentRoute: (state, action: PayloadAction<RoutesList>) => {
      state.currentRoute = action.payload;
      state.loading = true;
      state.error = null;
    },
    fetchCurrentRouteError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchCurrentRouteSuccess: (state, action: PayloadAction<string>) => {
      state.geometry = action.payload;
      state.loading = false;
      state.error = null;
    },
    setCurrentRoute: (state, action: PayloadAction<RoutesList>) => {
      state.currentRoute = action.payload;
    },
  },
});

export const {
  clearCurrentRoute,
  fetchCurrentRoute,
  fetchCurrentRouteError,
  fetchCurrentRouteSuccess,
  setCurrentRoute,
} = routeSlice.actions;

export default routeSlice.reducer;
