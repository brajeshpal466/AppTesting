import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.testAnalytics || initialState;

export const selectTestAnalytics = createSelector(
  [selectSlice],
  state => state,
);
