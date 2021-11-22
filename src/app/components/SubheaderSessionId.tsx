// @ts-nocheck
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
import ButtonComp from './ButtonComp';

const tabroute = ['Test Analytics', 'Test Session Id -148'];

function SubheaderSessionId() {
  return (
    <>
      <Flex
        fontFamily="Montserrat"
        fontWeight="500"
        backgroundColor="white1"
        justifyContent="space-between"
        width="100%"
        alignItems="center"
        paddingLeft="20px"
        color="grey13"
        height="60px"
      >
        <Flex fontSize="16px" fontWeight="500" fontFamily="Montserrat">
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
          height="50px"
          alignItems="center"
          flexDirection="row"
          justifyContent="center"
          padding="10px 0px"
          marginRight="5"
          boxSizing="border-box"
        >
          <ButtonComp padding="8px 0px" width="110px">
            RE-RUN
          </ButtonComp>
          <ButtonComp padding="8px 0px " width="110px">
            RAISE BUG
          </ButtonComp>
          <Flex
            fontWeight="500"
            marginLeft="10px"
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
            padding="5px"
          >
            <Text as="span" fontWeight="600" fontSize="20px" paddingRight="5px">
              5
            </Text>
            <Text color="green2" fontSize="13px">
              Passed{' '}
            </Text>
          </Flex>
          <Flex
            marginLeft="10px"
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
            padding="5px"
          >
            <Text as="span" fontSize="20px" fontWeight="600" paddingRight="5px">
              2
            </Text>
            <Text color="red2" fontSize="13px">
              Failed
            </Text>
          </Flex>
          <Flex
            marginLeft="10px"
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
            padding="5px"
          >
            <Text as="b" paddingRight="5px"></Text>
            <Text fontSize="16px" color="green2" fontWeight="600">
              COMPLETED
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default SubheaderSessionId;
