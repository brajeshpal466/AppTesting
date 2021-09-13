import { Text, Container, Flex, Center } from '@chakra-ui/layout';
import polygone from '../../styles/assets/Polygon 1.svg';
import ReactApexChart from 'react-apexcharts';
import TooltipData from './TooltipData';
import { Tooltip } from '@chakra-ui/tooltip';

const state = {
  series: [
    {
      name: 'Network',
      anotation: [
        {
          time: 2,
          eventname: 'home page load',
        },
        {
          time: 4,
          eventname: 'home display',
        },
      ],
      data: [
        {
          x: 'Dec 23 2017',
          y: 20,
        },
        {
          x: 'Dec 24 2017',
          y: 44,
        },
        {
          x: 'Dec 25 2017',
          y: 31,
        },
        {
          x: 'Dec 26 2017',
          y: 38,
        },
        {
          x: 'Dec 27 2017',
          y: 49,
        },
        {
          x: 'Dec 28 2017',
          y: 32,
        },
        {
          x: 'Dec 29 2017',
          y: 55,
        },
        {
          x: 'Dec 30 2017',
          y: 51,
        },
        {
          x: 'Dec 31 2017',
          y: 67,
        },
        {
          x: 'Jan 01 2018',
          y: 22,
        },
        {
          x: 'Jan 02 2018',
          y: 34,
        },
        {
          x: 'Jan 03 2018',
          y: 30,
        },
        {
          x: 'Jan 04 2018',
          y: 40,
        },
        {
          x: 'Jan 05 2018',
          y: 11,
        },
        {
          x: 'Jan 06 2018',
          y: 4,
        },
        {
          x: 'Jan 07 2018',
          y: 15,
        },
        {
          x: 'Jan 08 2018',
          y: 20,
        },
        {
          x: 'Jan 09 2018',
          y: 9,
        },
        {
          x: 'Jan 10 2018',
          y: 34,
        },
        {
          x: 'Jan 11 2018',
          y: 37,
        },
        {
          x: 'Jan 12 2018',
          y: 39,
        },
        {
          x: 'Jan 13 2018',
          y: 45,
        },
        {
          x: 'Jan 14 2018',
          y: 55,
        },
      ],
    },
  ],
  options: {
    chart: {
      type: 'area',
      height: 350,
      animations: {
        enabled: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    fill: {
      opacity: 0.8,
      type: 'pattern',
      pattern: {
        style: ['verticalLines', 'horizontalLines'],
        width: 5,
        height: 6,
      },
    },
    markers: {
      size: 5,
      hover: {
        size: 9,
      },
    },
    title: {
      text: 'Network Monitoring',
    },
    tooltip: {
      intersect: true,
      shared: false,
    },
    theme: {
      palette: 'palette',
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      title: {
        text: 'Bytes Received',
      },
    },
  },
};

const linePosition = [
  {
    position: '30%',
    time: '2s',
    eventname: 'event 1',
  },
  {
    position: '30%',
    time: '2s',
    eventname: 'event 1',
  },
  {
    position: '40%',
    time: '5s',
    eventname: 'event 2',
  },
  {
    position: '60%',
    time: '8s',
    eventname: 'event 3',
  },
  {
    position: '80%',
    time: '9s',
    eventname: 'event 4',
  },
];

function Charts() {
  return (
    <Flex position="relative" backgroundColor="#fffff0">
      <Flex
        backgroundColor="#fffff0"
        width="100%"
        height="250px"
        borderTop="3px solid grey"
      ></Flex>
      {linePosition.map(item => (
        <Flex
          width="15px"
          flexDirection="column"
          position="absolute"
          height="100%"
          top="25px"
          left={item.position}
        >
          <Tooltip
            hasArrow
            label={
              <TooltipData
                time={item.eventname}
                eventname={item.time}
              ></TooltipData>
            }
            top="0"
            placement="top"
            padding=" 0px 5px"
            borderLeftRadius="3px"
          >
            <img src={polygone}></img>
          </Tooltip>
          <Center height="75%">
            <Flex width="2px" backgroundColor="black" height="100%"></Flex>
          </Center>
        </Flex>
      ))}
    </Flex>
  );
}
export default Charts;
