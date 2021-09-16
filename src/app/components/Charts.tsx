//$no-check
// // import { Flex } from '@chakra-ui/layout'
// // import React from 'react'
// // import Chart from "react-google-charts";
// // function Charts() {
// //   return (
// //     <Flex>
// //       <Chart
// //   width={'100%'}
// //   height={'300px'}
// //   chartType="AreaChart"
// //   loader={<div>Loading Chart</div>}
// //   data={[
// //     ['Year', 'Sales'],
// //     ['1s', 100 ],
// //     ['2s', 78],
// //     ['3s', 66],
// //     ['4s', 17],
// //      ['5s', 35 ],
// //     ['6s', 46],
// //     ['7s', 66],
// //     ['8s', 58],
// //      ['9s', 78 ],
// //     ['10s', 19],
// //     ['11s', 66],
// //     ['12s', 30],
// //     ['13s', 80 ],
// //     ['14s', 70],
// //     ['15s', 0],
// //     ['16s', 0],
// //      ['17s', 90 ],
// //     ['18s', 70],
// //     ['19s', 66],
// //     ['20s', 77],
// //      ['21s', 70 ],
// //     ['22s', 50],
// //     ['23s', 60],
// //     ['24s', 89],
// //     ['25s', 40],
// //   ]}
// //   options={{
// //     isStacked: true,
// //     height: 300,
// //     legend: { position: 'top', maxLines: 2 },
// //     vAxis: { minValue: 0 },
// //     hAxis: {
// //       title: 'time',
// //       minValue: 100,
// //       gridlines: {
// //           count: 3
// //       },
// //       position : 'top'
// //   },
// //   }}
// //   rootProps={{ 'data-testid': '2' }}
// // />
// //     </Flex>
// //   )
// // }

// // export default Charts

// import React from 'react'

// // Import Highcharts
// import Highcharts from "highcharts/highstock";
// import HighchartsReact from "highcharts-react-official";

// //Highcharts.seriesTypes.column.prototype.negStacks = false;
// const series = [
//   {
//     name: "John",
//     data: [5, 3, 4, 7, 2 ,7,8,9,2,6,7]
//   },

// ];
// const options = {
//   chart: {
//     type: "area"
//   },
//   title: {
//     text: "Column chart with negative values"
//   },
//   xAxis: {
//     categories: [""]
//   },
//   credits: {
//     enabled: false
//   },
//   tooltip: {
//     shared: true
//   },
//   plotOptions: {
//     column: {
//       stacking: "normal"
//     }
//   },
//   series: series
// };

// function Charts() {
//   return (
//     <>
//      <HighchartsReact highcharts={Highcharts} options={options} />
//     </>
//   )
// }

// export default Charts
import { Line } from 'react-chartjs-2';
import React from 'react';
import { Container, Flex } from '@chakra-ui/layout';

const dataValue = [
  0, 70, 59, 5, 75, 10, 20, 89, 13, 66, 0, 0, 90, 40, 0, 2, 75, 80, 20, 89, 13,
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
      label: '',
      data: dataValue,
      fill: true,
      pointBorder: false,
      backgroundColor: '#a2abb1',
      borderColor: '#6567c4',
      borderWidth: 0.6,
      pointBorderColor: '#c0a6a6',
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
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
      legend: {
        title: {
          dispaly: false,
        },
      },
    },
    tooltip: {
      enabled: true,
    },
    legend: {
      display: false,
      position: 'top',
      align: 'start',
    },
  },

  scales: {
    x: {
      position: '',
      backgroundColor: 'rgb(255, 255, 255)',
      padding: '20px',
      grid: {
        display: false,
      },
    },
    y: {
      position: 'left',

      grid: {
        display: false,
      },
      borderColor: '#fffff',
      backgroundColor: ' #ffffff',
    },
  },
};

function Charts() {
  return (
    <Flex width="1000px" height="300px">
      <Line data={data} options={options}></Line>
    </Flex>
  );
}

export default Charts;
