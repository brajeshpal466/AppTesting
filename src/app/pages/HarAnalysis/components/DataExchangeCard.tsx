// @ts-nocheck
import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import UploadDownloadCard from './UploadDownloadCard';

function DataExchangeCard() {
  return (
    <Flex
      fontFamily="Montserrat"
      fontWeight="500"
      padding="15px"
      color="black1"
      flexDirection="column"
      boxSizing="border-box"
      height="158px"
      width="440px"
      marginLeft="auto"
      marginRight="auto"
      backgroundColor="white1"
      boxShadow="0px 3px 6px #00000029"
      borderRadius="4px"
    >
      <Text fontWeight="600" paddingBottom="5px">
        Data Exchange
      </Text>

      <UploadDownloadCard
        url="http://mozark-ip.ai/url-list/operations"
        size="259MB"
        type="upload"
      ></UploadDownloadCard>
      <UploadDownloadCard
        url="http://mozark-ip.ai/url-list/operations"
        size="259MB"
        type="download"
      ></UploadDownloadCard>
    </Flex>
  );
}

export default DataExchangeCard;
