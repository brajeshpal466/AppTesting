// @ts-nocheck
import {
  Flex,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react';
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
function ChartLayout({ children, height }) {
  return (
    <Flex
      flexDirection="column"
      paddingRight="2"
      fontFamily="gothamBook"
      fontSize="12px"
    >
      <Slider aria-label="slider-ex-1" defaultValue={5} colorScheme="red">
        <SliderTrack bgColor="grey11">
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb
          height="8px"
          width="8px"
          backgroundColor="red"
          _focus={{
            boxShadow: ' 0 0 0 red',
          }}
        ></SliderThumb>
      </Slider>
      <Flex
        fontFamily="gothamLight"
        top="0px"
        height="34px"
        marginTop="8px"
        paddingBottom="5"
        alignItems="flex-start"
        backgroundColor="grey4"
        justifyContent="space-between"
        zIndex="2"
        width="99.9%"
        paddingRight="2"
        justifyItems="flex-end"
        fontSize="10px"
        color="black1"
      >
        {labels.map(item => (
          <Flex alignItems="flex-start">|{item}s</Flex>
        ))}
      </Flex>

      <Flex
        overflow="scroll"
        marginTop="10px"
        flexDirection="column"
        background="white5"
        height={height}
        css={{
          '&::-webkit-scrollbar': {
            width: '0px',
          },
        }}
      >
        {children}
      </Flex>
    </Flex>
  );
}

export default ChartLayout;
