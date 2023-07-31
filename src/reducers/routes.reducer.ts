import type { RoutesList } from '@interfaces/Routes.interface';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface RoutesState {
  data: RoutesList[] | null;
  error: null | string;
  geometry: null | string;
  loading: boolean;
}

const initialState: RoutesState = {
  data: null,
  error: null,
  geometry: null,
  loading: false,
};

export const routesSlice = createSlice({
  initialState,
  name: 'routes',
  reducers: {
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
  },
});

export const { fetchRoutesFailure, fetchRoutesStart, fetchRoutesSuccess } = routesSlice.actions;

export default routesSlice.reducer;
