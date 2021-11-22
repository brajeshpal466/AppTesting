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
        fontFamily="Montserrat"
        fontWeight="500"
      >
        {/* <TableCaption >Test CaseSummary</TableCaption> */}
        <Thead backgroundColor="white3" textTransform="capitalize">
          <Tr>
            {tableHeader.map(heading => (
              <Th color="grey1" textTransform="capitalize">
                {heading}
              </Th>
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
