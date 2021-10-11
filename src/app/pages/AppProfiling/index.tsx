// @ts-nocheck
import { Flex } from '@chakra-ui/react';
import ChartLayout from 'app/components/ChartLayout';
import Charts from 'app/components/Charts';
import React from 'react';
import MobileDisplay from '../TestCases/components/MobileDisplay';

function AppProfiling() {
  return (
    <Flex flexDirection="row">
      <MobileDisplay></MobileDisplay>
      <Flex flexDirection="column" flexGrow={1}>
        <ChartLayout height="450px">
          <Charts shadow="true"></Charts>
          <Charts shadow="true"></Charts>
          <Charts shadow="true"></Charts>
          <Charts shadow="true"></Charts>
        </ChartLayout>
      </Flex>
    </Flex>
  );
}

export default AppProfiling;
