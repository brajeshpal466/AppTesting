// @ts-nocheck
import { Flex } from '@chakra-ui/layout';
import ChartLayout from 'app/components/ChartLayout';
import ChartWrapper from 'app/components/ChartWrapper';
import TabsLayout from 'app/components/TabsLayout';
import React from 'react';
import MobileDisplay from './components/MobileDisplay';
import TestCaseEvents from './components/TestCaseEvents';

import TestCasesSummaryTable from './components/TestCasesSummaryTable';
import { TestCasesChart } from './Features/TestCase';

function TestCases() {
  return (
    <Flex flexDirection="row" color="grey13">
      <MobileDisplay></MobileDisplay>
      <Flex flexDirection="column" flexGrow={1}>
        <ChartLayout>
          <ChartWrapper shadow="true">
            <TestCasesChart></TestCasesChart>
          </ChartWrapper>
        </ChartLayout>
        <TestCaseEvents></TestCaseEvents>
        <TestCasesSummaryTable></TestCasesSummaryTable>
      </Flex>
    </Flex>
  );
}

export default TestCases;
