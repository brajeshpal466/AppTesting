// @ts-nocheck
import { Flex, Text } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import MobileDisplay from '../TestCases/components/MobileDisplay';
import ChartLayout from 'app/components/ChartLayout';
import { TestCasesChart } from '../TestCases/Features/TestCase';
import SummaryTableComp from 'app/components/SummaryTableComp';
import TestCasesSummaryTable from '../TestCases/components/TestCasesSummaryTable';
import ChartWrapper from 'app/components/ChartWrapper';
import ExpChart from './Features';
import DropdownComp from 'app/components/DropdownComp';
import ListComp from 'app/components/ListComp';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectExperienceKpiData,
  selectLoading,
  selectError,
} from './slice/selectors';
import { ExperienceKpiErrorType } from './slice/types';
import { useExperienceKpiSlice } from './slice';

export function ExperienceKpi() {
  const { actions } = useExperienceKpiSlice();

  const ExperienceKpiData = useSelector(selectExperienceKpiData);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const useEffectOnMount = (effect: React.EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    // When initial state username is not null, submit the form to load repos
    dispatch(actions.loadExperienceKpiData());
  });

  const onSubmitForm = (evt?: React.FormEvent<HTMLFormElement>) => {
    /* istanbul ignore next  */
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
    }
  };

  //console.log(ExperienceKpiData);

  return (
    <Flex>
      <MobileDisplay></MobileDisplay>
      <Flex
        flexDirection="column"
        flexGrow={1}
        padding="1px 5px 15px 5px"
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
            <Flex height="222px" position="relative" width="100%">
              <ExpChart data={ExperienceKpiData}></ExpChart>
              <DropdownComp></DropdownComp>
              <ListComp></ListComp>
            </Flex>
          </ChartWrapper>
        </ChartLayout>
        <TestCasesSummaryTable></TestCasesSummaryTable>
      </Flex>
    </Flex>
  );
}

export default ExperienceKpi;

export const repoErrorText = (error: ExperienceKpiErrorType) => {
  switch (error) {
    case ExperienceKpiErrorType.RESPONSE_ERROR:
      return 'There is no such user 😞';
    default:
      return 'An error has occurred!';
  }
};
