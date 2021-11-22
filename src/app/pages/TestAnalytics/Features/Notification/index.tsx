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
        boxShadow="0px 3px 6px #00000029"
        padding="2px"
        height="100%"
        flexDirection="column"
        width="516px"
        position="fixed"
        right="0"
        zIndex="3"
        top="0"
      >
        <Flex
          top="0"
          onClick={closeHandler}
          right="516px"
          backgroundColor="grey14"
          width="100%"
          height="100%"
          position="fixed"
        ></Flex>
        <Flex
          justifyContent="flex-end"
          backgroundColor="white1"
          marginRight="6"
          paddingTop="6"
        >
          <CloseButton
            _focus={{
              boxShadow: ' 0 0 0 #ffffff',
            }}
            _hover={{ backgroundColor: '#ffffff' }}
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
          paddingBottom="2"
        >
          <Flex as="span" marginLeft="7" fontWeight="600">
            <Text color="grey1" position="relative">
              NOTIFICATIONS
              <Box
                width="100%"
                position="absolute"
                top="28px"
                borderBottom="3px solid"
                borderBottomColor="red1"
              ></Box>
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

          <Flex as="span" marginLeft="12">
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
          padding="2px 24px"
          color="grey7"
          marginTop="4"
          marginBottom="5"
        >
          <SearchBar></SearchBar>

          <SelectComp placeHolder="Last 7 days"></SelectComp>
        </Flex>
        <Flex
          flexDirection="column "
          paddingLeft="24px"
          paddingRight="3px"
          marginRight="21px"
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
                <Text
                  fontFamily="Montserrat"
                  fontWeight="500"
                  as="span"
                  color="grey5"
                >
                  {' '}
                  {item.date}
                </Text>
                <Text color="black1" fontFamily="Montserrat" fontWeight="500">
                  High memory uses for test run
                  <Text as="span" color="blue3">
                    #{item.id}
                  </Text>
                </Text>
              </Card>
            ))}
        </Flex>
      </Flex>
    </>
  );
}

export default Notification;
