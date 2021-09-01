import React from 'react'
import {Flex,Table ,TableCaption,Th,Tr,Thead,Td,Tbody}  from '@chakra-ui/react'

const tableHeader = [
    "Status",
    "Time",
    "Test Case",
    "Details",
];
const tableData =[
    {
     Status : "pass",
     Time : 0.01 ,
     TestCase : "test case one",
     Details : "test case details"
    },
    {
     Status : "pass",
     Time : 0.01 ,
     TestCase : "test case one",
     Details : "test case details"
    }
]

function SummaryTable() {
    return (
        <>
         <Table variant="simple" size="sm" width="100%" >
             {/* <TableCaption >Test CaseSummary</TableCaption> */}
               <Thead>
                   <Tr>
                      {tableHeader.map((heading)=> <Th>{heading}</Th>  )}
                   </Tr>
                   </Thead>
                   <Tbody>
                       {tableData.map((item)=> (
                           <Tr>
                               <Td  >{item.Status}</Td>
                               <Td isNumeric >{item.Time}</Td>
                               <Td >{item.TestCase}</Td>
                               <Td >{item.Details}</Td>
                           </Tr>
                       ))}
              
                   </Tbody>
               
            
         </Table>
        </>
    )
}

export default SummaryTable
