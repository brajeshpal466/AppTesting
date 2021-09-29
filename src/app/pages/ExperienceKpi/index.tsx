import { Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import MobileDisplay from '../TestCases/components/MobileDisplay';
import ChartLayout from 'app/components/ChartLayout';
import { TestCasesChart } from '../TestCases/Features/TestCase';
import SummaryTableComp from 'app/components/SummaryTableComp';
import TestCasesSummaryTable from '../TestCases/components/TestCasesSummaryTable';
function ExperienceKpi() {
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

export default ExperienceKpi;
