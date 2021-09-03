import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectTestAnalyticsData,
  selectLoading,
  selectError,
} from './slice/selectors';
import { TestAnalyticsErrorType } from './slice/types';
import { useTestAnalyticsSlice } from './slice';

export function TestAnalytics() {
  return (
    <h1>
      This is the root TestAnalytics page. All components will be displayed here
    </h1>
  );
}

/*
   <Table />
   <Tab>
      <Not />
      <Alert />
    </Tab>
 */
