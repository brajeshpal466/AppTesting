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
const labels = [
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
const dataValue = [
  40, 30, 59, 55, 75, 80, 20, 89, 13, 66, 34, 70, 90, 40, 30, 55, 75, 80, 20,
  89, 13, 66, 34, 70, 90,
];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'cpu',
      data: dataValue,
      fill: true,
      backgroundColor: 'rgb(141, 176, 252)',
      borderColor: 'rgba(68, 66, 233, 0.2)',
      pointBorderColor: 'rgb(115, 214, 245)',
    },
  ],
};

const options = {
  scales: {
    x: {
      position: 'none',
      backgroundColor: 'rgb(241, 245, 255)',
      padding: '20px',
    },
    y: {
      position: 'left',
      tick: {
        beingAtZero: true,
      },
      padding: '20px',
    },
  },
};

function Charts() {
  return (
    <Flex width="800px" height="300px">
      <Line data={data} options={options}></Line>
    </Flex>
  );
}

export default Charts;
