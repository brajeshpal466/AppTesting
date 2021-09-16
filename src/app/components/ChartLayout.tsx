import { Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import Charts from './Charts';

export const labels = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
];

function ChartLayout() {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      overflowY="auto"
      height="350px"
      marginTop="20px"
      outlineTop="3px solid grey"
    >
      <Flex
        width="1000px"
        position="sticky"
        top="0px"
        height="40px"
        paddingBottom="20px "
        alignItems="flex-start"
        backgroundColor="#b3aaaa"
        justifyContent="space-between"
      >
        {labels.map(item => (
          <Flex fontSize="12px" alignItems="flex-start">
            |{item}
          </Flex>
        ))}
      </Flex>
      <Charts></Charts>
      <Charts></Charts>
      <Charts></Charts>
      <Charts></Charts>
    </Flex>
  );
}

export default ChartLayout;
