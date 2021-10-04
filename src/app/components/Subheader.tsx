//@ts-nocheck
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Flex,
  Text,
  Box,
  Container,
} from '@chakra-ui/react';
import React from 'react';
import InfoComp from './SubheaderSessionId';

function Subheader({ infoStatusData, tabroute }) {
  return (
    <Flex
      backgroundColor="white1"
      justifyContent="space-between"
      width="100%"
      alignItems="center"
      paddingLeft="20px"
      height="60px"
    >
      <Flex fontSize="16px">
        <Breadcrumb textDecoration="none" color="black2">
          {tabroute &&
            tabroute.map(route => (
              <BreadcrumbItem>
                <BreadcrumbLink _hover={{ textDecoration: 'none' }}>
                  {route}{' '}
                </BreadcrumbLink>
              </BreadcrumbItem>
            ))}
        </Breadcrumb>
      </Flex>
      <Flex
        height="44px"
        width="269px"
        alignItems="center"
        flexDirection="row"
        justifyContent="space-between"
        padding="5px"
        marginRight="7"
      >
        <Flex marginLeft="0px">
          <Text as="b" paddingRight="5px">
            5
          </Text>
          <Text color="grey13">Running </Text>
        </Flex>
        <Flex marginLeft="0px">
          <Text as="b" paddingRight="5px">
            2
          </Text>
          <Text color="grey13">Queued </Text>
        </Flex>
        <Flex marginLeft="0px">
          <Text as="b" paddingRight="5px">
            1
          </Text>
          <Text color="grey13">Sheduled</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Subheader;
