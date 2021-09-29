import { Flex, Text, List, UnorderedList, ListItem } from '@chakra-ui/react';
import React from 'react';

function TestCaseEvents() {
  return (
    <Flex justifyContent="space-between" padding="5px">
      <Text>Test Cases</Text>
      <List display="flex">
        <ListItem> Events</ListItem>
        <ListItem> Events</ListItem>
        <ListItem> Events</ListItem>
      </List>
    </Flex>
  );
}

export default TestCaseEvents;
