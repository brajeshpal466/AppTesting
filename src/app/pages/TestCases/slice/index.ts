import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { testCasesSaga } from './saga';
import { testCasesState } from './types';

export const initialState: testCasesState = {
  loading: false,
  error: null,
  testCasesData: [],
};

const slice = createSlice({
  name: 'testCases',
  initialState,
  reducers: {
    loadtestCasesData: state => {
      state.loading = true;
    },
    testCasesDataLoaded: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = null;
      state.testCasesData = action.payload;
    },
    testCasesDataError: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { actions: testCasesActions } = slice;

export const useTestCasesSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: testCasesSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useTestCaseSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
