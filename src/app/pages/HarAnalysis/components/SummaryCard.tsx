import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

function SummaryCard({ title, data }) {
  return (
    <Flex flexDirection="column">
      <Text backgroundColor="#EDEDED" padding="3px 25px">
        {title}
      </Text>
      {data.map(item => (
        <Text as="span"></Text>
      ))}
    </Flex>
  );
}

export default SummaryCard;
