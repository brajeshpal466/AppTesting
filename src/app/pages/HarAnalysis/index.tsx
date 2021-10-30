// @ts-nocheck
import { Flex } from '@chakra-ui/layout';
import ChartLayout from 'app/components/ChartLayout';
import React from 'react';
import MobileDisplay from '../TestCases/components/MobileDisplay';
import HarChartStatus from './Components/HarChartStatus';
import RadioCheckbox from './Components/RadioCheckbox';
import HarChart from './Features/HarChart';

function HarAnalysis() {
  return (
    <Flex position="relative">
      <MobileDisplay></MobileDisplay>
      <Flex flexDirection="column" flexGrow={1}>
        <ChartLayout height="445px" leftalign="170">
          {/*
      
      <TestCasesChart></TestCasesChart> */}
          <RadioCheckbox></RadioCheckbox>
          <Flex
            height="100%"
            boxShadow="0px 3px 6px #00000029 inset"
            backgroundColor="white"
          >
            <HarChart></HarChart>
          </Flex>
          <HarChartStatus></HarChartStatus>
        </ChartLayout>
      </Flex>
    </Flex>
  );
}

export default HarAnalysis;
