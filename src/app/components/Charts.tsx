// @ts-nocheck

import { Line } from 'react-chartjs-2';
import React from 'react';
import { Container, Flex } from '@chakra-ui/layout';
import { black } from 'chalk';
import CheckBoxComp from './CheckBoxComp';
import DropdownComp from './DropdownComp';
import ListComp from './ListComp';
import { NONAME } from 'dns';
const dataValue = [
  0, 40, 59, 5, 75, 10, 20, 8, 13, 66, 0, 0, 20, 40, 0, 0, 75, 30, 20, 19, 76,
  66, 34, 0, 0,
];

export const labels = [
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

//let label = labels ;
//console.log(labels);
const data = {
  labels: labels,

  datasets: [
    {
      data: dataValue,
      fill: true,
      pointBorder: false,
      backgroundColor: '#CEF2FE',
      borderColor: '#2b2edf',
      borderWidth: 0.6,
      pointBorderColor: '#c0a6a6',
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  drawBorder: true,
  elements: {
    point: {
      radius: 0.1,
      pointStyle: 'line',
    },
    line: {},
  },
  plugins: {
    title: {
      text: 'CPU',
      display: true,
      align: 'start',
      color: '#cababa',
      fullSize: true,
      padding: {
        top: 24,
        bottom: 73,
      },
    },

    tooltip: {
      enabled: true,
    },
    legend: {
      display: false,
      labels: {},
    },
  },

  scales: {
    x: {
      display: false,
      backgroundColor: '#ffffff',
      borderBottom: '1px solid black',
      padding: '20px',
      grid: {
        display: false,
      },
    },
    y: {
      position: 'left',
      ticks: {
        mirror: true,
        display: true,
        stepSize: 25,
        suggestedMin: 25,
        Max: 100,
        callback: function (value, index, values) {
          if (value == 0) {
            return;
          }
          return value;
        },
        backgroundColor: 'grey',
      },
      grid: {
        drawBorder: false,
        drawTicks: true,

        tickMarkLength: 3,
        lineWidth: 1,
        backgroundColor: 'rgb(248,248,248)',
        color: ' #948080',
        drawOnChartArea: false,
      },

      borderColor: '#fffff',
      backgroundColor: ' #ffffff',
    },
  },
};

function Charts() {
  return (
    <Flex
      flexWrap="nowrap"
      border="1px solid #f0e7e7"
      borderTop="1px solid #c7b3b3"
      marginTop="9px"
      //  width="1031px"
      borderRadius="3px"
      height="207px"
      position="relative"
      backgroundColor="rgb(248,248,248)"
    >
      <Line data={data} options={options}></Line>
      <CheckBoxComp></CheckBoxComp>
      <DropdownComp></DropdownComp>
      <ListComp></ListComp>
      <Flex
        position="absolute"
        width="100%"
        bottom="9px"
        borderTop="1px solid #2b2edf"
      ></Flex>
    </Flex>
  );
}

export default Charts;
