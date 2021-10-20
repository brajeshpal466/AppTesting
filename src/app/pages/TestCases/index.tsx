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
              <TestCasesChart></TestCasesChart>
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
