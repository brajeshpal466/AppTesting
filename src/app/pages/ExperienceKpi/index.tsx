// @ts-nocheck
import { Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import MobileDisplay from '../TestCases/components/MobileDisplay';
import ChartLayout from 'app/components/ChartLayout';
import { TestCasesChart } from '../TestCases/Features/TestCase';
import SummaryTableComp from 'app/components/SummaryTableComp';
import TestCasesSummaryTable from '../TestCases/components/TestCasesSummaryTable';
import ChartWrapper from 'app/components/ChartWrapper';
import ExpChart from './Features';
import DropdownComp from 'app/components/DropdownComp';
import ListComp from 'app/components/ListComp';

function ExperienceKpi() {
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
              <ExpChart></ExpChart>
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
