//@ts-nocheck
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Flex,
  Text,
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
                <BreadcrumbLink>{route} </BreadcrumbLink>
              </BreadcrumbItem>
            ))}
        </Breadcrumb>
      </Flex>
      <Flex>
        {infoStatusData && (
          <InfoComp value={infoStatusData.running} type="Passed"></InfoComp>
        )}
        {infoStatusData && (
          <InfoComp value={infoStatusData.sheduled} type="Failed"></InfoComp>
        )}
        {infoStatusData && (
          <InfoComp value={infoStatusData.queued} type="Completed"></InfoComp>
        )}
      </Flex>
    </Flex>
  );
}

export default Subheader;
