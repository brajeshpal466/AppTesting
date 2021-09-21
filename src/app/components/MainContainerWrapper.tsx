//@ts-nocheck
import { Flex } from '@chakra-ui/layout';
import React from 'react';

function MainContainerWrapper({ children }) {
  return (
    <Flex marginLeft="63px" flexDirection="column">
      {children}
    </Flex>
  );
}

export default MainContainerWrapper;