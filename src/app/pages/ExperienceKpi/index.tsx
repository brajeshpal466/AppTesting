// @ts-nocheck
import { Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import MobileDisplay from '../TestCases/components/MobileDisplay';
import ChartLayout from 'app/components/ChartLayout';
import { TestCasesChart } from '../TestCases/Features/TestCase';
import SummaryTableComp from 'app/components/SummaryTableComp';
import TestCasesSummaryTable from '../TestCases/components/TestCasesSummaryTable';
import ChartWrapper from 'app/components/ChartWrapper';
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
          {/*
        
        <TestCasesChart></TestCasesChart> */}
          <ChartWrapper shadow="true">
            <Flex height="221px" alignItems="center" justifyContent="center">
              Experience Kpi chart is not ready
            </Flex>
          </ChartWrapper>
        </ChartLayout>
        <TestCasesSummaryTable></TestCasesSummaryTable>
      </Flex>
    </Flex>
  );
}

export default ExperienceKpi;
