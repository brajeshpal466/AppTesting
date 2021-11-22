import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import PieChart from './PieChart';

function SummaryPieBox({ title, subtitle, data, children }) {
  return (
    <Flex
      flexDirection="column"
      color="black1"
      padding="10px"
      margin="5px"
      width="215px"
      height="184px"
      boxShadow="0px 3px 6px #00000029"
      background="white1"
      border="0.2px solid"
      borderColor="white9"
      borderRadius="4px"
      fontFamily="Montserrat"
      fontWeight="500"
    >
      <Text fontWeight="600" as="span">
        {title}
      </Text>
      <Text
        fontSize="12px"
        boxShadow={subtitle ? '0px 3px 6px #00000029' : ' '}
        marginTop="2px"
        paddingLeft="12px"
        lineHeight="35px"
        height="35px"
      >
        {subtitle}
      </Text>
      <Flex width="200px" height="100px" position="static">
        {children}
      </Flex>
    </Flex>
  );
}

export default SummaryPieBox;
