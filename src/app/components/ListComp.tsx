import {
  Flex,
  List,
  Text,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  Box,
  AccordionPanel,
} from '@chakra-ui/react';
import copyIcon from '../../styles/Assets/Icon material-content-copy.svg';
import React from 'react';

const cpuData = [
  { name: 'avg', val: '12%' },
  { name: 'max', val: '56%' },
  { name: 'min', val: '0%' },
];

const CopyIcon = () => {
  return <img src={copyIcon} alt="copy"></img>;
};

function ListComp() {
  return (
    <Flex
      fontSize="12px"
      position="absolute"
      right="1.5"
      backgroundColor="white1"
      boxShadow="0px 3px 6px #00000029 "
      width="198px"
      top="46px"
      boxSizing="border-box"
      color="black"
      fontFamily="Montserrat"
      fontWeight="500"
    >
      <Flex
        justifyContent="space-between"
        width="100%"
        alignItems="center"
        borderRadius="2"
      >
        <Accordion
          allowMultiple
          backgroundColor="white"
          color="black"
          fontWeight="500"
          width="100%"
        >
          <AccordionItem boxSizing="border-box">
            <Flex
              width="100%"
              justifyContent="center"
              paddingTop="1"
              alignItems="center"
            >
              <AccordionButton
                padding="10px 8px"
                paddingRight="10px"
                display="flex"
                justifyContent="space-between"
                width="100%"
                height="8"
                border="none"
                _focus={{
                  boxShadow: ' 0 0 0 white',
                }}
                _hover={{ backgroundColor: '#ffffff' }}
              >
                <Box
                  width="100%"
                  textAlign="left"
                  fontSize="12px"
                  display="flex"
                  color="black"
                  fontWeight="500"
                >
                  CPU usage
                  <Box paddingLeft="7px">
                    <CopyIcon />
                  </Box>
                </Box>

                <AccordionIcon />
              </AccordionButton>
            </Flex>
            <AccordionPanel
              borderTop="1px solid #F3F6F9"
              padding="0px"
              height="105px"
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
            >
              {cpuData.map(item => (
                <Flex
                  fontSize="12px"
                  textTransform="capitalize"
                  borderBottom="1px solid #F3F6F9"
                  padding="4px 8px"
                  paddingRight="12px"
                  backgroundColor=""
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <Text as="span">{item.name}</Text>
                  <Text as="span">{item.val}</Text>
                </Flex>
              ))}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </Flex>
  );
}

export default ListComp;
