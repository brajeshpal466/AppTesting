import { Flex, Select } from '@chakra-ui/react';
import React from 'react';
const KpiList = ['KPI1', 'KPI2', 'KPI3', 'KPI4', 'KPI5'];
function DropdownComp() {
  return (
    <Flex
      position="absolute"
      padding="3px 0px"
      width="198px"
      height="30px"
      boxSizing="border-box"
      right="8.5px"
      top="5px"
      backgroundColor="white"
      boxShadow="1px 1px 2px #DEDEDE "
    >
      <Select
        size="xs"
        width="95%"
        height="100%"
        variant="unstyled"
        placeholder="Select KPI  "
        paddingLeft="16px"
        paddingRight="15px"
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
