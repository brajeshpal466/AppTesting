// @ts-nocheck
import { Flex } from '@chakra-ui/layout';
import ChartLayout from 'app/components/ChartLayout';
import Charts from 'app/components/Charts';
import React from 'react';
import MobileDisplay from '../TestCases/components/MobileDisplay';

function VideoAnalysis() {
  return (
    <Flex flexDirection="row">
      <MobileDisplay></MobileDisplay>
      <Flex flexGrow={1} flexDirection="column">
        <ChartLayout height="450px">
          <Charts></Charts>
          <Charts></Charts>
          <Charts></Charts>
        </ChartLayout>
      </Flex>
    </Flex>
  );
}

export default VideoAnalysis;
