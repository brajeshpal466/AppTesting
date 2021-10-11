// @ts-nocheck
import { Flex } from '@chakra-ui/layout';
import React from 'react';

function ChartWrapper({ children, shadow }) {
  return (
    <>
      <Flex
        flexWrap="nowrap"
        border="1px solid "
        borderColor="grey6"
        borderRadius="3px"
        position="relative"
        boxShadow={shadow ? '0px 3px 6px #00000029 inset' : ' '}
        backgroundColor="white5"
      >
        {children}
      </Flex>
    </>
  );
}

export default ChartWrapper;
