import { Flex } from '@chakra-ui/layout';
import ChartLayout from 'app/components/ChartLayout';
import React from 'react';
import MobileDisplay from '../TestCases/components/MobileDisplay';

function HarAnalysis() {
  return (
    <Flex>
      <MobileDisplay></MobileDisplay>
      <Flex flexDirection="column" flexGrow={1}>
        <ChartLayout height="534px">
          {/*
      
      <TestCasesChart></TestCasesChart> */}
          <Flex height="221px" alignItems="center" justifyContent="center">
            Har Analysis chart is not ready
          </Flex>
        </ChartLayout>
      </Flex>
    </Flex>
  );
}

export default HarAnalysis;
