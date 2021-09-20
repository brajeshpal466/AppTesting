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
function ChartLayout() {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      width="1031px"
      marginLeft="5px"
    >
      <Flex
        flexDirection="column"
        alignItems="center"
        marginTop="20px"
        width="100%"
      >
        <Slider aria-label="slider-ex-1" defaultValue={30} colorScheme="red">
          <SliderTrack>
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
          width="1031px"
          position="sticky"
          top="0px"
          height="34px"
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
        <Flex
          flexDirection="column"
          pos="static"
          overflow="scroll"
          boxSizing="border-box"
          overflowX="hidden"
          css={{
            '&::-webkit-scrollbar': {
              width: '0px',
              display: 'none',
            },
          }}
        >
          <Charts></Charts>
          <Charts></Charts>
          <Charts></Charts>
          <Charts></Charts>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default ChartLayout;
