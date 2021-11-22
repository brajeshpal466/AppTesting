import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

function SummaryCard({ title, data }) {
  console.log(data);
  return (
    <Flex
      flexDirection="column"
      width="100%"
      paddingBottom="15px"
      overflow="hidden"
      fontFamily="Montserrat"
    >
      <Text
        fontWeight="600"
        color="grey13"
        backgroundColor="#EDEDED"
        height={title ? '25px' : '16px'}
        lineHeight="20px"
        padding="2px 20px"
        fontFamily="Montserrat"
      >
        {title}
      </Text>
      {data.map(item => (
        <Text
          color="grey2"
          borderBottom="1px solid "
          borderBottomColor="white8"
          padding="2px 25px"
          paddingTop="3px"
          fontWeight="500"
        >
          {' '}
          {item}
        </Text>
      ))}
    </Flex>
  );
}

export default SummaryCard;
