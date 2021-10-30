import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
function UploadDownloadCard({ url, size, type }) {
  return (
    <Flex flexDirection="column" padding="5px 0px">
      <Flex color="grey8" justifyContent="space-between" alignItems="center">
        <Text>Url for most data {type}</Text>
        <Text textTransform="capitalize">{type}</Text>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center">
        <Text>{url}</Text>
        <Text>{size}</Text>
      </Flex>
    </Flex>
  );
}

export default UploadDownloadCard;
