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

function StatusInfoComp({ infoStatusData, tabroute }) {
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Flex>
        <Breadcrumb textDecoration="none">
          {tabroute &&
            tabroute.map(route => (
              <BreadcrumbItem>
                <BreadcrumbLink>{route}</BreadcrumbLink>
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

export default StatusInfoComp;
