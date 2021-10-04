// @ts-nocheck
import {
  Flex,
  Text,
  List,
  UnorderedList,
  ListItem,
  ListIcon,
  Box,
} from '@chakra-ui/react';
import LabelComp from 'app/components/LabelComp';
import React from 'react';

function TestCaseEvents() {
  return (
    <Flex
      justifyContent="space-between"
      padding="5px"
      color="grey13"
      fontSize="12px"
    >
      <Text>Test Cases</Text>
      <Flex>
        <LabelComp color="red1" borderColor="red1">
          Events
        </LabelComp>
        <LabelComp color="red3" borderColor="red3">
          Failed Test Case
        </LabelComp>
        <LabelComp color="green3" borderColor="green1">
          Passed Test Case
        </LabelComp>
      </Flex>
    </Flex>
  );
}

export default TestCaseEvents;
