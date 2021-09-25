import { Flex } from '@chakra-ui/layout';
import TabsLayout from 'app/components/TabsLayout';
import React from 'react';
import MobileDisplay from './components/MobileDisplay';
import TestCasesChart from './components/TestCasesChart';
import TestCasesSummaryTable from './components/TestCasesSummaryTable';

function TestCases() {
  return (
    <Flex>
      <MobileDisplay></MobileDisplay>
      <Flex flexDirection="column" flexGrow={8}>
        <TestCasesChart></TestCasesChart>
        <TestCasesSummaryTable></TestCasesSummaryTable>
      </Flex>
    </Flex>
  );
}

export default TestCases;
