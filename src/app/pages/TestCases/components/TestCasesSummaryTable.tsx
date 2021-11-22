// @ts-nocheck
import { Text, Flex } from '@chakra-ui/layout';
import { SummaryTable } from 'app/pages/SummaryTable/Loadable';
import React from 'react';

function TestCasesSummaryTable() {
  return (
    <Flex
      marginTop="10px "
      fontFamily="Montserrat"
      fontWeight="500"
      fontSize="14px"
      flexDirection="column"
      background="white1"
      padding="10px"
      boxShadow="2px 8px 6px #00000029"
    >
      <Text paddingBottom="1" paddingLeft="0.5">
        Test Cases Summary
      </Text>
      <SummaryTable></SummaryTable>
    </Flex>
  );
}

export default TestCasesSummaryTable;
