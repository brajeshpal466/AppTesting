// @ts-nocheck

import { Line } from 'react-chartjs-2';
import React from 'react';
import { Container, Flex } from '@chakra-ui/layout';
import { black } from 'chalk';
import CheckBoxComp from './CheckBoxComp';
import DropdownComp from './DropdownComp';
import ListComp from './ListComp';
import { NONAME } from 'dns';
import ChartWrapper from './ChartWrapper';
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
      borderColor: '#008EE0',
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
        top: 15,
        bottom: 65,
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
      backgroundColor: 'white',
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

        tickMarkLength: 1,
        tickLength: 4,
        lineWidth: 0.7,

        backgroundColor: 'rgb(248,248,248)',
        color: ' #948080',
        drawOnChartArea: false,
      },

      borderColor: '#fffff',
      backgroundColor: ' #ffffff',
    },
  },
};

function Charts({ shadow }) {
  return (
    <ChartWrapper shadow={shadow}>
      <Flex width="99.9% ! important" justifyItems="flex-end " height="218px">
        <Line data={data} options={options}></Line>
      </Flex>

      <CheckBoxComp></CheckBoxComp>
      <DropdownComp></DropdownComp>
      <ListComp></ListComp>
      <Flex
        position="absolute"
        width="100%"
        bottom="9.5px"
        borderTop="1px solid "
        borderTopColor="blue7"
      ></Flex>
    </ChartWrapper>
  );
}

export default Charts;
