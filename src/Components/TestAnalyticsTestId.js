import React from 'react'
import {Grid, Flex ,Box,Text, GridItem} from '@chakra-ui/react'


function TestAnalyticsTestId() {
    return (
        <>
         <Grid boxShadow=".5px .5px 2px " padding="10px" alignContent="flex-start" templateColumns="repeat(6, 1fr)"gridRowGap="20" gap={6}>
  <GridItem  w="100%"   >
      <Text as="span" display="block">Session Id</Text>
      <Text as="b" display="block">Seskkjdjkkndj </Text>
  </GridItem>
  <GridItem  w="100%"   >
      <Text as="span" display="block">Date & Time</Text>
      <Text as="b" display="block">15 july 2015</Text>
  </GridItem>
  <GridItem  w="100%"  >
      <Text as="span" display="block">Project</Text>
      <Text as="b" display="block">App Project Name </Text>
  </GridItem>
  <GridItem  w="100%"   >
      <Text as="span" display="block">Build</Text>
      <Text as="b" display="block">ver  3.1.0</Text>
  </GridItem>
  <GridItem  w="100%"   >
      <Text as="span" display="block">Script</Text>
      <Text as="b" display="block">Jenkins Build Name </Text>
  </GridItem>
  <GridItem  w="100%"  >
      <Text as="span" display="block"></Text>
      <Text as="b" display="block"></Text>
  </GridItem>
  <GridItem  w="100%"   >
      <Text as="span" display="block">Script</Text>
      <Text as="b" display="block">Samsung Galaxy Note Pro 10</Text>
  </GridItem>
  <GridItem  w="100%"   >
      <Text as="span" display="block">OS</Text>
      <Text as="b" display="block">Android Id</Text>
  </GridItem>
  <GridItem  w="100%"   >
      <Text as="span" display="block">Location</Text>
      <Text as="b" display="block">India</Text>
  </GridItem>
  <GridItem  w="100%"   >
      <Text as="span" display="block">Network</Text>
      <Text as="b"  display="block">Airtel</Text>
  </GridItem>
 
</Grid>   
        </>
    )
}

export default TestAnalyticsTestId

 