import { Flex } from '@chakra-ui/react';
import React from 'react';

function SubContainer({ children }) {
  return (
    <Flex
      background=""
      border="20px solid #e9d6d6"
      flexDirection="column"
      flexWrap="nowrap"
      padding="px 0px"
    >
      {children}
    </Flex>
  );
}

export default SubContainer;
