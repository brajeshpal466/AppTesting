import { Container, Flex, Text } from '@chakra-ui/layout';
import React from 'react';

function InfoComp({ type, value }) {
  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      padding="5px"
    >
      {value !== 0 && (
        <Text as="b" paddingRight="5px">
          {value}
        </Text>
      )}
      {type && <Text color="grey">{type}</Text>}
    </Flex>
  );
}

export default InfoComp;
