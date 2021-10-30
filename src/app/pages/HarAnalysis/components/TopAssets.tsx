import { Flex, Text } from '@chakra-ui/layout';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table';
import React from 'react';

function TopAssets() {
  return (
    <Flex
      padding="15px 10px"
      width="441px"
      flexDirection="column"
      backgroundColor="white1"
      boxShadow="0px 3px 6px #00000029"
      margin="0px auto"
      marginTop="10px"
    >
      <Text as="b">Top 3 Assets</Text>
      <Flex flexDirection="column">
        {/* table heading */}
        <Flex
          borderBottom="1px solid "
          borderBottomColor="white3"
          color="grey8"
          justifyContent="space-between"
          marginRight="10px"
        >
          <Text> Assets </Text>
          <Flex>
            <Text marginLeft="10px">Type</Text>
            <Text marginLeft="10px"> Size</Text>
          </Flex>
        </Flex>
        {/* table body*/}
        <Flex
          borderBottom="1px solid "
          borderBottomColor="white3"
          justifyContent="space-between"
          marginRight="10px"
        >
          <Text>https://www.ur-twol.com</Text>
          <Flex>
            <Text marginLeft="10px"></Text>
            <Text marginLeft="10px"></Text>
          </Flex>
        </Flex>
        <Flex
          borderBottom="1px solid "
          borderBottomColor="white3"
          justifyContent="space-between"
          marginRight="10px"
        >
          <Text>https://www.ur-twol.com</Text>
          <Flex>
            <Text marginLeft="10px"></Text>
            <Text marginLeft="10px"></Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default TopAssets;
