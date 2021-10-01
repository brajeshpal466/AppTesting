// @ts-nocheck

import { Flex } from '@chakra-ui/layout';
import React from 'react';

import TestAnalytics from '../../components/Table';
function DisplaytableData() {
  return (
    <Flex padding="1em" background="white" borderRadius="2">
      <TestAnalytics></TestAnalytics>
    </Flex>
  );
}

export default DisplaytableData;
