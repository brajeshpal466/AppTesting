// @ts-nocheck
import { Flex } from '@chakra-ui/layout';
import ChartLayout from 'app/components/ChartLayout';
import ChartWrapper from 'app/components/ChartWrapper';
import TabsLayout from 'app/components/TabsLayout';
import React, { useEffect, useState } from 'react';
import MobileDisplay from './components/MobileDisplay';
import TestCaseEvents from './components/TestCaseEvents';

import TestCasesSummaryTable from './components/TestCasesSummaryTable';
import { TestCasesChart } from './Features/TestCase';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectTestCasesData,
  selectLoading,
  selectError,
} from './slice/selectors';
import { TestCasesErrorType } from './slice/types';
import { useTestCasesSlice } from './slice';

export function TestCases() {
  const { actions } = useTestCasesSlice();

  const testCasesData = useSelector(selectTestCasesData);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const useEffectOnMount = (effect: React.EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    // When initial state username is not null, submit the form to load repos
    dispatch(actions.loadtestCasesData());
  });

  const onSubmitForm = (evt?: React.FormEvent<HTMLFormElement>) => {
    /* istanbul ignore next  */
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
    }
  };

  console.log(testCasesData);

  return (
    <Flex fontFamily="Montserrat" flexDirection="row" color="grey13">
      <MobileDisplay></MobileDisplay>
      <Flex
        flexDirection="column"
        padding="1px 5px 15px 5px"
        marginTop="4"
        flexGrow={1}
        height="535px"
        overflow="auto"
        __css={{
          '&::-webkit-scrollbar': {
            width: '0px',
          },
        }}
      >
        <ChartLayout>
          <ChartWrapper shadow="true">
            <Flex height="221px" position="relative" width="100%">
              <TestCasesChart data={testCasesData}></TestCasesChart>
            </Flex>
          </ChartWrapper>
        </ChartLayout>
        <TestCaseEvents></TestCaseEvents>
        <TestCasesSummaryTable></TestCasesSummaryTable>
      </Flex>
    </Flex>
  );
}

export default TestCases;

export const repoErrorText = (error: TestCasesErrorType) => {
  switch (error) {
    case TestCasesErrorType.RESPONSE_ERROR:
      return 'There is no such user 😞';
    default:
      return 'An error has occurred!';
  }
};
