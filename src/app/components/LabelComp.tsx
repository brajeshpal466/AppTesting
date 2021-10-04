// @ts-nocheck
import { Box, Flex, Text } from '@chakra-ui/layout';
import React from 'react';

function LabelComp({ children, color, borderColor }) {
  return (
    <Flex alignItems="center">
      <Box
        border=".2px solid"
        borderColor={borderColor}
        height="10px "
        borderRadius="50%"
        width="10px"
        marginRight="2"
        background={color}
      ></Box>
      <Text paddingRight="10px">{children}</Text>
    </Flex>
  );
}

export default LabelComp;
