import { Flex, Select } from '@chakra-ui/react';
import React from 'react';
const KpiList = ['KPI1', 'KPI2', 'KPI3', 'KPI4', 'KPI5'];
function DropdownComp() {
  return (
    <Flex
      position="absolute"
      alignItems="center"
      justifyContent="center"
      width="198px"
      height="30px"
      boxSizing="border-box"
      borderRadius="2"
      top="2"
      right="1.5"
      backgroundColor="white1"
      boxShadow="0px 3px 6px #00000029 "
    >
      <Select
        boxSizing="border-box"
        fontSize="12px"
        width="100%"
        height="100%"
        variant="unstyled"
        placeholder="Select KPI  "
        paddingLeft="2"
        paddingRight="1"
        background="white"
      >
        {KpiList.map(option => (
          <option>{option}</option>
        ))}
      </Select>
    </Flex>
  );
}

export default DropdownComp;
