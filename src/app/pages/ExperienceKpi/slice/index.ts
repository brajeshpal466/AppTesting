import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { ExperienceKpiSaga } from './saga';
import { ExperienceKpiState } from './types';

export const initialState: ExperienceKpiState = {
  loading: false,
  error: null,
  ExperienceKpiData: [],
};

const slice = createSlice({
  name: 'ExperienceKpi',
  initialState,
  reducers: {
    loadExperienceKpiData: state => {
      state.loading = true;
    },
    ExperienceKpiDataLoaded: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = null;
      state.ExperienceKpiData = action.payload;
    },
    ExperienceKpiDataError: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { actions: ExperienceKpiActions } = slice;

export const useExperienceKpiSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: ExperienceKpiSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useExperienceKpiSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
