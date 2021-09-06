import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { summaryTableSaga } from './saga';
import { summaryTableState } from './types';

export const initialState: summaryTableState = {
  loading: false,
  error: null,
  summaryTableData: [],
};

const slice = createSlice({
  name: 'summaryTable',
  initialState,
  reducers: {
    loadsummaryTableData: state => {
      state.loading = true;
    },
    summaryTableDataLoaded: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = null;
      state.summaryTableData = action.payload;
    },
    summaryTableDataError: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { actions: summaryTableActions } = slice;

export const useSummaryTableSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: summaryTableSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = usesummaryTableSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
