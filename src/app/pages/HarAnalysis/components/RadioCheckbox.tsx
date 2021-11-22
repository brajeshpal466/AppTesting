import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import RadioButton from './RadioButton';

function RadioCheckbox() {
  return (
    <Flex
      zIndex="3"
      fontFamily="Montserrat"
      justifySelf="self-start"
      height="50px"
      backgroundColor="transparent"
      fontWeight="500"
      fontSize="14px"
      color="black"
      boxShadow="0px  3px 6px #00000029 inset"
    >
      <RadioButton></RadioButton>
    </Flex>
  );
}

export default RadioCheckbox;
