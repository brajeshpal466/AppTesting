import { Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
function SubNavbar() {
  return (
    <Flex
      alignItems="center"
      justifyContent="flex-start"
      textTransform="uppercase"
      padding="2px 5px"
      borderBottom="1px solid"
      borderTop="1px solid "
    >
      <Text paddingLeft="4">
        <Link as={NavLink} to="/" style={{ textDecoration: 'none' }}>
          Test Cases
        </Link>
      </Text>
      <Text paddingLeft="4">
        <Link as={NavLink} to="/" style={{ textDecoration: 'none' }}>
          Experience KPI
        </Link>
      </Text>
      <Text paddingLeft="4">
        <Link as={NavLink} to="/" style={{ textDecoration: 'none' }}>
          Vedio Analysis
        </Link>
      </Text>
      <Text paddingLeft="4">
        <Link as={NavLink} to="/" style={{ textDecoration: 'none' }}>
          App Profiling
        </Link>
      </Text>
      <Text paddingLeft="4">
        <Link as={NavLink} to="/" style={{ textDecoration: 'none' }}>
          Har Analysis
        </Link>
      </Text>
    </Flex>
  );
}

export default SubNavbar;
