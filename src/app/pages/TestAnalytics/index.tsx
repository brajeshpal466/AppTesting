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

  return (
    <>
      <Notification items={testNotificationData}></Notification>
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
