// @ts-nocheck
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectTestSessionData,
  selectLoading,
  selectError,
} from './slice/selectors';
import { TestSessionErrorType } from './slice/types';
import { useTestSessionSlice } from './slice';
import SessionidTable from './components/SessionidTable';
import DisplayTable from './Features/DisplayTable';
import Subheader from 'app/components/Subheader';
import SubContainer from 'app/components/SubContainer';
import SubTabContainar from './Features/SubTabContainer';
import SubNavbar from './components/SubNavbar';
import SubTabWrapper from './Features/SubTabWrapper';
import { Route, Switch } from 'react-router';
import TestCases from '../TestCases';
import VideoAnalysis from '../VideoAnalysis';
import AppProfiling from '../AppProfiling';
import { Container, Flex, Text } from '@chakra-ui/layout';
import ExperienceKpi from '../ExperienceKpi';
import HarAnalysis from '../HarAnalysis';
import SubheaderSessionId from 'app/components/SubheaderSessionId';

export function TestSession() {
  const { actions } = useTestSessionSlice();

  const testSessionData = useSelector(selectTestSessionData);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const useEffectOnMount = (effect: React.EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    // When initial state username is not null, submit the form to load repos
    dispatch(actions.loadTestSessionData());
  });

  const onSubmitForm = (evt?: React.FormEvent<HTMLFormElement>) => {
    /* istanbul ignore next  */
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
    }
  };

  // let Passed: number = 0;
  // let Failed: number = 0;
  // let Completed: number = 0;
  // const infoStatusData = {
  //   Passed,
  //   Failed,
  //   Completed,
  // };

  const [currentTabId, setCurrentTabId] = useState('testcase');
  // document.getElementById("currentTabId").style.borderBottom ="3px solid blue";
  const tabHandler = e => {
    setCurrentTabId(e.target.id);
  };

  return (
    <>
      <SubheaderSessionId></SubheaderSessionId>
      <SubContainer>
        <DisplayTable testSessionData={testSessionData[0]}></DisplayTable>
        <SubNavbar
          tabHandler={tabHandler}
          currentTabId={currentTabId}
        ></SubNavbar>
        <SubTabWrapper>
          {currentTabId == 'testcase' && <TestCases></TestCases>}
          {currentTabId == 'expkpi' && <ExperienceKpi></ExperienceKpi>}
          {currentTabId == 'vdo' && <VideoAnalysis></VideoAnalysis>}
          {currentTabId == 'app' && <AppProfiling></AppProfiling>}
          {currentTabId == 'har' && <HarAnalysis></HarAnalysis>}
        </SubTabWrapper>
      </SubContainer>
    </>
  );
}

export const repoErrorText = (error: TestSessionErrorType) => {
  switch (error) {
    case TestSessionErrorType.RESPONSE_ERROR:
      return 'There is no such user 😞';
    default:
      return 'An error has occurred!';
  }
};
