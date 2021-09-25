import { Flex } from '@chakra-ui/react';
import React from 'react';

function SubContainer({ children }) {
  return (
    <Flex
      background="grey3"
      border="15px solid "
      borderColor="white2"
      flexDirection="column"
      flexWrap="nowrap"
      padding="px 0px"
    >
      {children}
    </Flex>
  );
}

export default SubContainer;
