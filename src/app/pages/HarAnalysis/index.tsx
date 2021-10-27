// @ts-nocheck
import { Flex } from '@chakra-ui/layout';
import ChartLayout from 'app/components/ChartLayout';
import React from 'react';
import MobileDisplay from '../TestCases/components/MobileDisplay';
import HarChart from './Features/HarChart';

function HarAnalysis() {
  return (
    <Flex position="relative">
      <MobileDisplay></MobileDisplay>
      <Flex flexDirection="column" flexGrow={1}>
        <ChartLayout height="480px" widht="78%">
          {/*
      
      <TestCasesChart></TestCasesChart> */}
          {/* <Flex  alignItems="center" flexDirection="column" justifyContent="center" height="445px" > */}
          <HarChart></HarChart>
          {/* 
          </Flex> */}
        </ChartLayout>
      </Flex>
    </Flex>
  );
}

export default HarAnalysis;
