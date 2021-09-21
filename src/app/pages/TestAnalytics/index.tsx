//@ts-nocheck
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
import testNotificationData from '../../../types/testNotification';
import ts from 'typescript';
import { TestAnalytics } from './components/Table';
import DisplaytableData from './Features/DisplayTestData';
import { testNotification } from './Loadable';
import Subheader from 'app/components/Subheader';
import SubContainer from 'app/components/SubContainer';
export function TestNotification() {
  const { actions } = useTestNotificationSlice();
  const testNotificationData = useSelector(selecttestNotificationData);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const useEffectOnMount = (effect: React.EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    // When initial state username is not null, submit the form to load repos
    dispatch(actions.loadtestNotificationData());
  });

  const onSubmitForm = (evt?: React.FormEvent<HTMLFormElement>) => {
    /* istanbul ignore next  */
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
    }
  };
  const tabroute = ['Test Analytics'];
  let running: number = 0;
  let sheduled: number = 0;
  let queued: number = 0;
  const infoStatusData = {
    running,
    queued,
    sheduled,
  };

  return (
    <>
      <Subheader
        tabroute={tabroute}
        infoStatusData={infoStatusData}
      ></Subheader>
      <SubContainer>
        <DisplaytableData></DisplaytableData>
        <Notification items={testNotificationData}></Notification>
      </SubContainer>
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
