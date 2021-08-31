import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import React from 'react'
import config from '../Assets/file-cog-outline.svg';
function Tables({tableHeaders,tableListData,tableCaption}) {
// console.log(tableListData);
    return (
        
        <Table variant="simple" size="md" >
            <TableCaption>{tableCaption}</TableCaption>
            <Thead>
                <Tr >
                    {tableHeaders.map((header)=> ( <Th>{header}</Th>))}
                </Tr>
            </Thead>
          <Tbody >
            {tableListData.map((item,index)=> (<Tr  id={`tr ${item.objId}`}>
                
                <Td  > <img src={config} ></img> &nbsp;{item.Status}</Td>
                <Td isNumeric >{item.StartedOn}</Td>
                <Td isNumeric >{item.Id}</Td>
                <Td isNumeric  >{item.Project}</Td>
                <Td isNumeric >{item.Build}</Td>
                <Td isNumeric >{item.Script}</Td>
                <Td isNumeric >{item.Device}</Td>
                <Td isNumeric >{item.User}</Td>              
            </Tr>))} 
          </Tbody>
        </Table>    
    )
}

export default Tables

