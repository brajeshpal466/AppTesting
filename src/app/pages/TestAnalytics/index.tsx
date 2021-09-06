import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import {
  selecttestNotificationData,
  selectLoading,
  selectError,
} from './slice/selectors';
import { testNotificationErrorType } from './slice/types';
import { useTestNotificationSlice } from './slice';
import Notification from './Features/Notification/index';
export function TestNotification() {
  const action = useTestNotificationSlice();

  return (
    <>
      <Notification></Notification>
    </>
  );
}

/*
   <Table />
   <Tab>
      <Not />
      <Alert />
    </Tab>
 */
