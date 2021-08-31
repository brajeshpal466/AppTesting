import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { testAnalyticsSaga } from './saga';
import { TestAnalyticsState } from './types';

export const initialState: TestAnalyticsState = {
  loading: false,
  error: null,
  testAnalyticsData: [],
};

const slice = createSlice({
  name: 'testAnalytics',
  initialState,
  reducers: {
    loadTestAnalyticsData: state => {
      state.loading = true;
    },
    testAnalyticsDataLoaded: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = null;
      state.testAnalyticsData = action.payload;
    },
    testAnalyticsDataError: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { actions: testAnalyticsActions } = slice;

export const useTestAnalyticsSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: testAnalyticsSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useTestAnalyticsSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
