import { Text } from '@chakra-ui/layout';
import { SummaryTable } from 'app/pages/SummaryTable/Loadable';
import React from 'react';

function TestCasesSummaryTable() {
  return (
    <>
      <Text>Test Case Summary</Text>
      <SummaryTable></SummaryTable>
    </>
  );
}

export default TestCasesSummaryTable;
