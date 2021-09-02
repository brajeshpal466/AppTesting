import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { testSessionSaga } from './saga';
import { TestSessionState } from './types';

export const initialState: TestSessionState = {
  loading: false,
  error: null,
  testSessionData: [],
};

const slice = createSlice({
  name: 'testSession',
  initialState,
  reducers: {
    loadTestSessionData: state => {
      state.loading = true;
    },
    testSessionDataLoaded: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = null;
      state.testSessionData = action.payload;
    },
    testSessionDataError: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { actions: testSessionActions } = slice;

export const useTestSessionSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: testSessionSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useTestSessionSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
