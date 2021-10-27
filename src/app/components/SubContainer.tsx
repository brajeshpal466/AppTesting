import { Flex } from '@chakra-ui/react';
import React from 'react';

function SubContainer({ children }) {
  return (
    <Flex border="20px solid " width="100%" borderColor="white2">
      <Flex
        border="1px solid"
        borderColor="grey3"
        flexDirection="column"
        borderRadius="3"
        flexWrap="nowrap"
        padding="0"
        width="100%"
      >
        {children}
      </Flex>
    </Flex>
  );
}

export default SubContainer;
