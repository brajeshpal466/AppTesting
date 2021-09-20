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
import React from 'react';

const cpuData = [
  { name: 'avg', val: '12%' },
  { name: 'max', val: '56%' },
  { name: 'min', val: '0%' },
];

function ListComp() {
  return (
    <Flex
      position="absolute"
      right="8.5px"
      top="38px"
      padding="0px 2px"
      boxShadow="1px 1px 2px #dbc3c3"
      width="198px"
      boxSizing="border-box"
    >
      <Flex justifyContent="space-between" width="100%">
        <Accordion allowMultiple backgroundColor="#ffffff" width="100%">
          <AccordionItem boxSizing="border-box">
            <h3>
              <AccordionButton
                boxSizing="border-box"
                size="xs"
                height="24px"
                border="none"
                BackgroundColor="#ffffff"
                _focus={{
                  boxShadow: ' 0 0 0 #ffffff',
                }}
                _hover={{ backgroundColor: '#ffffff' }}
              >
                <Box flex="1" textAlign="left" fontSize="12px">
                  CPU usage
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h3>
            <AccordionPanel
              pb={4}
              padding="10px 4px"
              height="105px"
              display="flex"
              flexDirection="column"
              justifyContent="space-evenly"
            >
              {cpuData.map(item => (
                <Flex
                  fontSize="13px"
                  textTransform="capitalize"
                  borderBottom="1px solid #f3e5e5"
                  height="18px"
                  backgroundColor="#fffff"
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
