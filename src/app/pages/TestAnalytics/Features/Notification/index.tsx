// do data fetching and pass data to Card or whatever
import React from 'react';
import {
  Text,
  Heading,
  Flex,
  Container,
  CloseButton,
  Badge,
  Center,
} from '@chakra-ui/react';

import { NavLink } from 'react-router-dom';
import { CardComponent as Card } from '../../components/Card';
import SearchBar from '../../components/SearchBar';
import SelectComp from '../../components/SelectComp';
function Notification({ items }) {
  console.log(items);
  return (
    <>
      <Flex
        background="white"
        boxShadow="1px 1px 5px grey"
        padding="10px"
        height="100vh"
        flexDirection="column"
        width="400px"
        position="fixed"
        right="0"
        top="0"
      >
        <Flex justifyContent="flex-end">
          <CloseButton size="sm" float="right" border="none" bgColor="#ffff" />
        </Flex>

        <Flex
          justifyContent="flex-start"
          borderBottom="2px solid grey "
          paddingBottom="10px"
        >
          <Flex as="span">
            <NavLink to="/" style={{ textDecoration: 'none' }}>
              Notification{' '}
            </NavLink>

            <Badge
              ml="1"
              padding="4px"
              backgroundColor="red"
              fontWeight="bold"
              borderRadius="50%"
              colorScheme="white"
              fontSize="11px"
              width="8px"
              height="10px"
              variant="solid"
            >
              <Center>2</Center>
            </Badge>
          </Flex>

          <Flex as="span">
            <NavLink to="/alert" style={{ textDecoration: 'none' }}>
              {' '}
              Alert
            </NavLink>
            <Badge
              ml="1"
              padding="4px"
              backgroundColor="red"
              fontWeight="bold"
              colorScheme="white"
              borderRadius="50%"
              fontSize="11px"
              width="8px"
              height="10px"
              variant="solid"
            >
              <Center>3</Center>
            </Badge>
          </Flex>
        </Flex>
        <Flex justifyContent="space-around">
          <Container>
            {' '}
            <SearchBar></SearchBar>
          </Container>
          <Container>
            <SelectComp placeHolder="7 days"></SelectComp>
          </Container>
        </Flex>
        <Container padding="10px">
          {items &&
            items.map(item => (
              <Card>
                <Text as="span"> {item.date}</Text>
                <Text>High memory uses for test run #{item.id}</Text>
              </Card>
            ))}
        </Container>
      </Flex>
    </>
  );
}

export default Notification;
