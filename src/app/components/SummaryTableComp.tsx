import React from 'react';
import {
  Grid,
  Flex,
  Box,
  Text,
  GridItem,
  Table,
  TableCaption,
  Th,
  Tr,
  Thead,
  Td,
  Tbody,
} from '@chakra-ui/react';
function SummaryTableComp({ tableHeader, summaryTableData }) {
  return (
    <>
      <Table
        variant="simple"
        size="sm"
        width="100%"
        backgroundColor="white"
        fontFamily="sans-serif"
      >
        {/* <TableCaption >Test CaseSummary</TableCaption> */}
        <Thead backgroundColor="white3">
          <Tr>
            {tableHeader.map(heading => (
              <Th>{heading}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {summaryTableData.map(item => (
            <Tr borderBottomColor="grey2">
              <Td>{item.status}</Td>
              <Td>{item.time}</Td>
              <Td>{item.testcase}</Td>
              <Td>{item.details}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
}

export default SummaryTableComp;
