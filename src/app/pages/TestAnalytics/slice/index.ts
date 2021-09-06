import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { testNotificationSaga } from './saga';
import { testNotificationState } from './types';

export const initialState: testNotificationState = {
  loading: false,
  error: null,
  testNotificationData: [],
};

const slice = createSlice({
  name: 'testNotification',
  initialState,
  reducers: {
    loadtestNotificationData: state => {
      state.loading = true;
    },
    testNotificationDataLoaded: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = null;
      state.testNotificationData = action.payload;
    },
    testNotificationDataError: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { actions: testNotificationActions } = slice;

export const useTestNotificationSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: testNotificationSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useTestNotificationSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
