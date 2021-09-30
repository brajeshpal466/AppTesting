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
function ChartLayout({ children }) {
  return (
    <Flex flexDirection="column" marginTop="5px">
      <Slider aria-label="slider-ex-1" defaultValue={5} colorScheme="red">
        <SliderTrack bgColor="grey11">
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb
          backgroundColor="red"
          _focus={{
            boxShadow: ' 0 0 0 red',
          }}
        />
      </Slider>
      <Flex
        position="sticky"
        top="0px"
        height="34px"
        paddingBottom="20px "
        alignItems="flex-start"
        backgroundColor="grey4"
        justifyContent="space-between"
        zIndex="2"
        width="99.9%"
        justifyItems="flex-end"
      >
        {labels.map(item => (
          <Flex fontSize="12px" alignItems="flex-start">
            |{item}s
          </Flex>
        ))}
      </Flex>

      <Flex
        marginTop="10px"
        flexDirection="column"
        border=" 1px solid "
        borderColor="grey4"
        background="white5"
        css={{
          '&::-webkit-scrollbar': {
            width: '0px',
            display: 'none',
          },
        }}
      >
        {children}
      </Flex>
    </Flex>
  );
}

export default ChartLayout;
