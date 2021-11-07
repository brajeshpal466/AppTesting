import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

// First select the relevant part from the state
const selectSlice = (state: RootState) => state.ExperienceKpi || initialState;

export const selectExperienceKpiData = createSelector(
  [selectSlice],
  state => state.ExperienceKpiData,
);

export const selectLoading = createSelector(
  [selectSlice],
  state => state.loading,
);

export const selectError = createSelector([selectSlice], state => state.error);

/*
import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.ExperienceKpi || initialState;

export const selectExperienceKpi = createSelector(
  [selectSlice],
  state => state,
);
*/
