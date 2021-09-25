import React from 'react';
import { Grid, Flex, Box, Text, GridItem } from '@chakra-ui/react';
function SessionidTable({ testSessionData }) {
  return (
    <>
      {testSessionData && (
        <Grid
          backgroundColor="white"
          // borderBottom="1px solid"
          // borderBottomColor="grey1"
          boxShadow=".5px .5px 2px grey "
          padding="10px"
          alignContent="flex-start"
          templateColumns="repeat(6, 1fr)"
          gridRowGap="1"
          gap={3}
        >
          <GridItem w="100%">
            <Text as="span" color="grey5" display="block">
              Session Id
            </Text>
            <Text as="b" display="block" color="grey10">
              {testSessionData.testSessionId}
            </Text>
          </GridItem>
          <GridItem w="100%">
            <Text as="span" color="grey5" display="block">
              Date & Time
            </Text>
            <Text as="b" display="block" color="grey10">
              {testSessionData.timeStamp}
            </Text>
          </GridItem>
          <GridItem w="100%">
            <Text as="span" display="block" color="grey5">
              Project
            </Text>
            <Text as="b" display="block" color="grey10">
              {testSessionData.project}
            </Text>
          </GridItem>
          <GridItem w="100%">
            <Text as="span" display="block" color="grey5">
              Build
            </Text>
            <Text as="b" display="block" color="grey10">
              {testSessionData.build}
            </Text>
          </GridItem>
          <GridItem w="100%">
            <Text as="span" display="block" color="grey5">
              Script
            </Text>
            <Text as="b" display="block" color="grey10">
              {testSessionData.script}
            </Text>
          </GridItem>
          <GridItem w="100%">
            <Text as="span" display="block"></Text>
            <Text as="b" display="block"></Text>
          </GridItem>
          <GridItem w="100%">
            <Text as="span" display="block" color="grey5">
              Script
            </Text>
            <Text as="b" display="block" color="grey10">
              {testSessionData.script}
            </Text>
          </GridItem>
          <GridItem w="100%">
            <Text as="span" display="block" color="grey5">
              OS
            </Text>
            <Text as="b" display="block" color="grey10">
              {testSessionData.os}
            </Text>
          </GridItem>
          <GridItem w="100%">
            <Text as="span" display="block" color="grey5">
              Location
            </Text>
            <Text as="b" display="block" color="grey10">
              {testSessionData.location}
            </Text>
          </GridItem>
          <GridItem w="100%">
            <Text as="span" display="block" color="grey5">
              Network
            </Text>
            <Text as="b" display="block" color="grey10">
              {testSessionData.network}
            </Text>
          </GridItem>
        </Grid>
      )}
    </>
  );
}

export default SessionidTable;
