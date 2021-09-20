//@ts-nockeck
import { Container, Flex, Text } from '@chakra-ui/layout';
import React from 'react';

const TooltipData = ({ time, eventname }) => {
  return (
    <Flex
      boxShadow="1px 1px 3px grey"
      zIndex="4"
      justifyContent="center"
      flexDirection="column"
      alignContent="center"
      padding="5px 15px"
    >
      <Text as="span">{time}</Text>
      <Text as="span">{eventname}</Text>
    </Flex>
  );
};

export default TooltipData;
