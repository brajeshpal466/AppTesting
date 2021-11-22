import { Checkbox } from '@chakra-ui/checkbox';
import { Input } from '@chakra-ui/input';
import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
const title = 'CPU';
function CheckBoxComp(inputHandler) {
  return (
    <Flex
      position="absolute"
      right="220px"
      top="10px"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#fffff"
      fontFamily="Montserrat"
      fontWeight="500"
      boxShadow=".5px .5px 1px #fffff"
    >
      <Flex flexDirection="row" alignItems="center">
        <Checkbox size="sm"></Checkbox> &nbsp;
        <Text as="span" fontSize="12px">
          {' '}
          Include {title} usage % &gt;{' '}
        </Text>
      </Flex>
      <Input
        onMouseUp={inputHandler}
        variant="flushed"
        _focus={{ color: 'none' }}
        borderBottom="1px solid"
        borderBottomColor="black"
        width="30px"
        size="xs"
      ></Input>
      %
    </Flex>
  );
}

export default CheckBoxComp;
