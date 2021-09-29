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
import InfoComp from './InfoComp';

function Subheader({ infoStatusData, tabroute }) {
  return (
    <Flex
      backgroundColor="white1"
      justifyContent="space-between"
      width="100%"
      alignItems="center"
      paddingLeft="20px"
    >
      <Flex>
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
        alignItems="center"
        flexDirection="row"
        justifyContent="center"
        padding="5px"
        marginRight="5"
      >
        <Flex marginLeft="10px">
          <Text as="b" paddingRight="5px">
            5
          </Text>
          <Text color="grey13">Running </Text>
        </Flex>
        <Flex marginLeft="10px">
          <Text as="b" paddingRight="5px">
            2
          </Text>
          <Text color="grey13">Queued </Text>
        </Flex>
        <Flex marginLeft="10px">
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
