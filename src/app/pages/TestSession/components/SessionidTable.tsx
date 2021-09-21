import React from 'react';
import { Grid, Flex, Box, Text, GridItem } from '@chakra-ui/react';
function SessionidTable({ testSessionData }) {
  return (
    <>
      {testSessionData && (
        <Grid
          boxShadow=".5px .5px 2px grey "
          padding="10px"
          alignContent="flex-start"
          templateColumns="repeat(6, 1fr)"
          gridRowGap="1"
          gap={3}
        >
          <GridItem w="100%">
            <Text as="span" display="block">
              Session Id
            </Text>
            <Text as="b" display="block">
              {testSessionData.testSessionId}
            </Text>
          </GridItem>
          <GridItem w="100%">
            <Text as="span" display="block">
              Date & Time
            </Text>
            <Text as="b" display="block">
              {testSessionData.timeStamp}
            </Text>
          </GridItem>
          <GridItem w="100%">
            <Text as="span" display="block">
              Project
            </Text>
            <Text as="b" display="block">
              {testSessionData.project}
            </Text>
          </GridItem>
          <GridItem w="100%">
            <Text as="span" display="block">
              Build
            </Text>
            <Text as="b" display="block">
              {testSessionData.build}
            </Text>
          </GridItem>
          <GridItem w="100%">
            <Text as="span" display="block">
              Script
            </Text>
            <Text as="b" display="block">
              {testSessionData.script}
            </Text>
          </GridItem>
          <GridItem w="100%">
            <Text as="span" display="block"></Text>
            <Text as="b" display="block"></Text>
          </GridItem>
          <GridItem w="100%">
            <Text as="span" display="block">
              Script
            </Text>
            <Text as="b" display="block">
              {testSessionData.script}
            </Text>
          </GridItem>
          <GridItem w="100%">
            <Text as="span" display="block">
              OS
            </Text>
            <Text as="b" display="block">
              {testSessionData.os}
            </Text>
          </GridItem>
          <GridItem w="100%">
            <Text as="span" display="block">
              Location
            </Text>
            <Text as="b" display="block">
              {testSessionData.location}
            </Text>
          </GridItem>
          <GridItem w="100%">
            <Text as="span" display="block">
              Network
            </Text>
            <Text as="b" display="block">
              {testSessionData.network}
            </Text>
          </GridItem>
        </Grid>
      )}
    </>
  );
}

export default SessionidTable;
