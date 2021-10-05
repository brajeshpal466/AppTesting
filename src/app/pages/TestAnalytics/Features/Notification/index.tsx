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
        boxShadow="0px 3px  #00000029"
        padding="2px"
        height="100vh"
        flexDirection="column"
        width="400px"
        position="fixed"
        right="0"
        zIndex="3"
        top="0"
      >
        <Flex
          top="0"
          onClick={closeHandler}
          right="400px"
          backgroundColor="grey14"
          width="100%"
          height="100%"
          position="fixed"
        ></Flex>
        <Flex
          justifyContent="flex-end"
          backgroundColor="white1"
          padding="2"
          paddingRight="4"
          paddingTop="4"
        >
          <CloseButton
            size="2px"
            float="right"
            onClick={closeHandler}
            border="none"
            color="grey2"
            bgColor="white1"
          />
        </Flex>

        <Flex
          justifyContent="flex-start"
          borderBottom="3px solid  "
          borderBottomColor="grey3"
        >
          <Flex as="span" marginLeft="4">
            <Text
              color="grey1"
              borderBottom="3px solid"
              borderBottomColor="red1"
            >
              NOTIFICATIONS
            </Text>
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

          <Flex as="span" marginLeft="5">
            <Text color="grey5">ALERTS</Text>
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
        <Flex
          justifyContent="space-between"
          padding="0px"
          padding="2px 10px"
          paddingLeft="3"
          marginTop="2"
          marginBottom="3"
        >
          <SearchBar></SearchBar>

          <SelectComp placeHolder="7 days"></SelectComp>
        </Flex>
        <Container
          padding="4"
          fontSize="14px"
          height="80%"
          overflow="auto"
          css={{
            '&::-webkit-scrollbar': {
              width: '5px',
            },
            '&::-webkit-scrollbar-track': {
              boxShadow: 'inset 0 0 6px white',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#F3F6F9',
              height: '116px',
            },
          }}
        >
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
