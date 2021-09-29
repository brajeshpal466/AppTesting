//@ts-nocheck
import { Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
function SubNavbar({ tabHandler, currentTabId }) {
  const activeStyle = {
    borderBottom: '3px solid #F51C5E',
    borderRadius: '1px',
  };
  const inActiveStyle = {
    ...activeStyle,
    borderBottom: 'none',
  };

  return (
    <Flex
      background="white"
      alignItems="center"
      justifyContent="flex-start"
      textTransform="uppercase"
      borderBottom="1px solid"
      borderBottomColor="grey1"
      borderTop="1px solid"
      borderTopColor="grey1"
      color="black2"
    >
      <Text
        marginLeft="4"
        id="testcase"
        style={currentTabId !== 'testcase' ? inActiveStyle : activeStyle}
        padding="2px 2px"
        onClick={tabHandler}
        cursor="pointer"
      >
        Test Cases
      </Text>
      <Text
        marginLeft="4"
        id="expkpi"
        style={currentTabId !== 'expkpi' ? inActiveStyle : activeStyle}
        padding="2px 2px"
        onClick={tabHandler}
        cursor="pointer"
      >
        Experience KPI
      </Text>
      <Text
        marginLeft="4"
        id="vdo"
        style={currentTabId !== 'vdo' ? inActiveStyle : activeStyle}
        padding="2px 2px"
        onClick={tabHandler}
        cursor="pointer"
      >
        Video Analysis
      </Text>
      <Text
        marginLeft="4"
        id="app"
        style={currentTabId !== 'app' ? inActiveStyle : activeStyle}
        padding="2px 2px"
        onClick={tabHandler}
        cursor="pointer"
      >
        App Profiling
      </Text>
      <Text
        marginLeft="4"
        id="har"
        style={currentTabId !== 'har' ? inActiveStyle : activeStyle}
        padding="2px 2px"
        onClick={tabHandler}
        cursor="pointer"
      >
        Har Analysis
      </Text>
    </Flex>
  );
}

export default SubNavbar;
