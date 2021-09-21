import { Flex } from '@chakra-ui/layout';
import ChartLayout from 'app/components/ChartLayout';
import React from 'react';
import MobileDisplay from '../TestCases/components/MobileDisplay';

function VideoAnalysis() {
  return (
    <Flex flexDirection="row">
      <MobileDisplay></MobileDisplay>
      <Flex width="100%" flexDirection="column">
        <ChartLayout></ChartLayout>
      </Flex>
    </Flex>
  );
}

export default VideoAnalysis;
