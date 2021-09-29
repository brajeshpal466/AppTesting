import { Flex } from '@chakra-ui/layout';
import ChartLayout from 'app/components/ChartLayout';
import TabsLayout from 'app/components/TabsLayout';
import React from 'react';
import MobileDisplay from './components/MobileDisplay';

import TestCasesSummaryTable from './components/TestCasesSummaryTable';
import { TestCasesChart } from './Features/TestCase';

function TestCases() {
  return (
    <Flex>
      <MobileDisplay></MobileDisplay>
      <Flex flexDirection="column" flexGrow={8}>
        <ChartLayout>
          <TestCasesChart></TestCasesChart>
        </ChartLayout>
        <TestCasesSummaryTable></TestCasesSummaryTable>
      </Flex>
    </Flex>
  );
}

export default TestCases;
