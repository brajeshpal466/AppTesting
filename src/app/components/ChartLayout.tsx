// @ts-nocheck
import {
  Flex,
  Text,
  Box,
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

const labelsHar = [
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
];
function ChartLayout({ children, height, leftalign }) {
  return (
    <Flex
      flexDirection="column"
      paddingRight="2"
      fontFamily="gothamBook"
      fontSize="12px"
    >
      <Flex>
        <Slider
          marginLeft={leftalign}
          alignSelf={leftalign ? 'self-end' : ''}
          aria-label="slider-ex-1"
          defaultValue={5}
          colorScheme="red"
        >
          <SliderTrack backgroundColor="grey11">
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
      </Flex>

      <Flex>
        {leftalign ? (
          <Flex
            alignSelf={leftalign ? 'self-end' : ''}
            fontFamily="gothamLight"
            top="0px"
            marginLeft={leftalign}
            height="34px"
            marginTop="8px"
            paddingBottom="5"
            alignItems="flex-start"
            backgroundColor="grey4"
            justifyContent="space-between"
            zIndex="2"
            width="99.9%"
            paddingRight="2%"
            justifyItems="flex-end"
            fontSize="10px"
            color="black1"
          >
            {labelsHar.map(item => (
              <Flex alignItems="flex-start">
                |{' '}
                <Box as="span" width="14px">
                  {item}s
                </Box>
              </Flex>
            ))}
          </Flex>
        ) : (
          <Flex
            alignSelf={leftalign ? 'self-end' : ''}
            fontFamily="gothamLight"
            top="0px"
            marginLeft={leftalign}
            height="34px"
            marginTop="8px"
            paddingBottom="5"
            alignItems="flex-start"
            backgroundColor="grey4"
            justifyContent="space-between"
            zIndex="2"
            width="99.9%"
            paddingRight="2%"
            justifyItems="flex-end"
            fontSize="10px"
            color="black1"
          >
            {labels.map(item => (
              <Flex alignItems="flex-start">
                |{' '}
                <Box as="span" width="14px">
                  {item}s
                </Box>
              </Flex>
            ))}
          </Flex>
        )}
      </Flex>

      <Flex
        overflow="scroll"
        marginTop="10px"
        flexDirection="column"
        background="white5"
        height={height || 'inherite'}
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
