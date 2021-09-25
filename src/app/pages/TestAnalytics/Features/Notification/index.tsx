// do data fetching and pass data to Card or whatever
// @ts-nocheck
import React from 'react';
import {
  Text,
  Heading,
  Flex,
  Container,
  CloseButton,
  Badge,
  Box,
  Center,
} from '@chakra-ui/react';

import { NavLink } from 'react-router-dom';
import { CardComponent as Card } from '../../components/Card';
import SearchBar from '../../components/SearchBar';
import SelectComp from '../../components/SelectComp';
function Notification({ items }) {
  console.log(items);
  const closeHandler = () => {
    document.getElementById('notification').style.display = 'none';
  };

  return (
    <>
      <Flex
        id="notification"
        background="white1"
        boxShadow="1px 1px 5px grey"
        padding="10px"
        height="100vh"
        flexDirection="column"
        width="400px"
        position="fixed"
        right="0"
        zIndex="3"
        top="0"
      >
        <Flex justifyContent="flex-end" backgroundColor="white1">
          <CloseButton
            size="sm"
            float="right"
            onClick={closeHandler}
            border="none"
            bgColor="white1"
          />
        </Flex>

        <Flex
          justifyContent="flex-start"
          borderBottom="2px solid grey "
          paddingBottom="10px"
        >
          <Flex as="span">
            <Text color="grey1">Notification</Text>
            <Box right="-3px" top="-8px" marginLeft="1">
              <Flex
                backgroundColor="red1"
                justifyContent="center"
                color="white1"
                alignItems="center"
                borderRadius="50%"
                height="20px"
                width="20px"
              >
                1
              </Flex>
            </Box>
          </Flex>

          <Flex as="span">
            <Text color="grey5">Alert</Text>
            <Box right="-3px" top="-8px" marginLeft="1">
              <Flex
                backgroundColor="red1"
                justifyContent="center"
                color="white1"
                alignItems="center"
                borderRadius="50%"
                height="20px"
                width="20px"
              >
                1
              </Flex>
            </Box>
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
                <Text as="span" color="grey5">
                  {' '}
                  {item.date}
                </Text>
                <Text color="black1">
                  High memory uses for test run
                  <Text as="span" color="blue3">
                    #{item.id}
                  </Text>
                </Text>
              </Card>
            ))}
        </Container>
      </Flex>
    </>
  );
}

export default Notification;
