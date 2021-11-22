// @ts-nocheck
import {
  Flex,
  RadioGroup,
  Stack,
  Radio,
  Input,
  Select,
  Text,
} from '@chakra-ui/react';
import ButtonComp from 'app/components/ButtonComp';
import React from 'react';

function RadioButton() {
  return (
    <Flex
      alignItems="center"
      marginLeft="auto"
      fontWeight="500"
      fontFamily="Montserrat"
      marginRight="auto"
    >
      <RadioGroup fontSize="14px" size="sm">
        <Stack direction="row">
          <Radio value="1">HTTP Error</Radio>
          <Radio value="2">Wait Time &gt; </Radio>
          <Input
            variant="flushed"
            _focus={{ color: 'none' }}
            borderBottom="1px solid"
            borderBottomColor="black"
            width="30px"
            size="xs"
          ></Input>{' '}
          <Text as="span" lineHeight="30px" textTransform="lowercase">
            ms
          </Text>
          <Radio value="3">TLS Time &gt;</Radio>
          <Input
            variant="flushed"
            _focus={{ color: 'none' }}
            borderBottom="1px solid"
            borderBottomColor="black"
            width="30px"
            size="xs"
          ></Input>{' '}
          <Text as="span" lineHeight="30px" textTransform="lowercase">
            ms
          </Text>
          <Radio value="4">String</Radio>
          <Input
            variant="flushed"
            _focus={{ color: 'none' }}
            borderBottom="1px solid"
            borderBottomColor="black"
            width="60px"
            size="xs"
          ></Input>
          <Radio value="5">Asset Type</Radio>
          <Select
            variant="flushed"
            _focus={{ color: 'none' }}
            borderBottom="1px solid"
            borderBottomColor="black"
            width="60px"
            size="xs"
          ></Select>
          <ButtonComp backgroundColor="transparent" marginLeft="10px">
            APPLY
          </ButtonComp>
          <ButtonComp backgroundColor="transparent" marginLeft="10px">
            RESET
          </ButtonComp>
        </Stack>
      </RadioGroup>
    </Flex>
  );
}

export default RadioButton;
