import {
  Container,
  Flex,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react';
import React from 'react';

const tabroute = ['Test Analytics', 'Test Session Id -148'];

function SubheaderSessionId() {
  return (
    <>
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
          <Flex
            marginLeft="10px"
            flexDirection="column"
            background="red"
            justifyContent="center"
          >
            <Text as="b" paddingRight="5px">
              5
            </Text>
            <Text color="green">Passed </Text>
          </Flex>
          <Flex marginLeft="10px" flexDirection="column">
            <Text as="b" paddingRight="5px">
              2
            </Text>
            <Text color="red">Failed</Text>
          </Flex>
          <Flex
            marginLeft="10px"
            flexDirection="column"
            justifyContent="center"
            alignContent="center"
          >
            <Text as="b" paddingRight="5px"></Text>
            <Text color="green  ">Completed</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default SubheaderSessionId;
