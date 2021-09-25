//@ts-nocheck
import { Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
function SubNavbar({ tabHandler, currentTabId }) {
  return (
    <Flex
      background="white"
      alignItems="center"
      justifyContent="flex-start"
      textTransform="uppercase"
      padding="2px 5px"
      borderBottom="1px solid"
      borderBottomColor="grey1"
      borderTop="1px solid"
      borderTopColor="grey1"
      color="black2"
    >
      <Text
        paddingLeft="4"
        id="1"
        onClick={tabHandler}
        borderBottom
        cursor="pointer"
      >
        Test Cases
      </Text>
      <Text paddingLeft="4" id="2" onClick={tabHandler} cursor="pointer">
        Experience KPI
      </Text>
      <Text paddingLeft="4" id="3" onClick={tabHandler} cursor="pointer">
        Vedio Analysis
      </Text>
      <Text paddingLeft="4" id="4" onClick={tabHandler} cursor="pointer">
        App Profiling
      </Text>
      <Text paddingLeft="4" id="5" onClick={tabHandler} cursor="pointer">
        Har Analysis
      </Text>
    </Flex>
  );
}

export default SubNavbar;
