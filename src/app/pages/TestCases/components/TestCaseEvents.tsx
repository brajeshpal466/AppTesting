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
      fontSize="13px"
    >
      <Text>Test Cases</Text>
      <Flex>
        <LabelComp color="red">Events</LabelComp>
        <LabelComp color="red">Failed Test Case</LabelComp>
        <LabelComp color="green">Passed Test Case</LabelComp>
      </Flex>
    </Flex>
  );
}

export default TestCaseEvents;
