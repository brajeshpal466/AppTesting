import { Flex } from '@chakra-ui/layout';
import React from 'react';
import SubNavbar from '../components/SubNavbar';

function SubTabContainer() {
  return (
    <Flex flexDirection="column">
      <SubNavbar></SubNavbar>
    </Flex>
  );
}

export default SubTabContainer;
