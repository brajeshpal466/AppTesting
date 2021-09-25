import { Flex } from '@chakra-ui/react';
import ChartLayout from 'app/components/ChartLayout';
import React from 'react';
import MobileDisplay from '../TestCases/components/MobileDisplay';

function AppProfiling() {
  return (
    <Flex flexDirection="row">
      <MobileDisplay></MobileDisplay>
      <Flex flexDirection="column" flexGrow={1}>
        <ChartLayout></ChartLayout>
      </Flex>
    </Flex>
  );
}

export default AppProfiling;
