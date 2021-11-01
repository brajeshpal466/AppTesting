// @ts-nocheck
import { Flex } from '@chakra-ui/layout';
import React from 'react';
import StatusBox from './StatusBox';

function HarChartStatus() {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      padding="0px 10px"
      marginTop="10px"
    >
      <Flex paddingLeft="5px">1056 Requests</Flex>
      <Flex alignSelf="flex-end" justifyContent="center">
        <StatusBox color="blue8">Connect</StatusBox>
        <StatusBox color="green4">Send</StatusBox>
        <StatusBox color="red4">Receive</StatusBox>
        <StatusBox color="white10">Wait</StatusBox>
        <StatusBox color="red5">SSL</StatusBox>
        <StatusBox color="orange">Blocked</StatusBox>
      </Flex>
    </Flex>
  );
}

export default HarChartStatus;
