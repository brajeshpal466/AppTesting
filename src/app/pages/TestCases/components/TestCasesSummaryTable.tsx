// @ts-nocheck
import { Text, Flex } from '@chakra-ui/layout';
import { SummaryTable } from 'app/pages/SummaryTable/Loadable';
import React from 'react';

function TestCasesSummaryTable() {
  return (
    <Flex
      marginTop="10px "
      flexDirection="column"
      background="white1"
      padding="10px"
    >
      <Text>Test Case Summary</Text>
      <SummaryTable></SummaryTable>
    </Flex>
  );
}

export default TestCasesSummaryTable;
