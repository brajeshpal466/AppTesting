import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

function StatusBox({ children, color }) {
  return (
    <Flex alignItems="center" paddingRight="10px">
      <Box
        width="10px"
        height="10px"
        backgroundColor={color}
        border="1px solid "
        borderColor={color}
        marginRight="5px"
      ></Box>
      <Text as="span">{children}</Text>
    </Flex>
  );
}

export default StatusBox;
