// @ts-nocheck
// import React from 'react'
// import { Chart } from 'chart.js';

// import {useEffect ,useRef}  from  'react'
// var barOptions_stacked = {
//     hover :{
//         animationDuration:10
//     },
//     scales: {
//         xAxes: [{
//             label:"Duration",
//             ticks: {
//                 beginAtZero:true,
//                 fontFamily: "'Open Sans Bold', sans-serif",
//                 fontSize:11
//             },
//             scaleLabel:{
//                 display:false
//             },
//             gridLines: {
//             },
//             stacked: true
//         }],
//         yAxes: [{
//             gridLines: {
//                 display:false,
//                 color: "#fff",
//                 zeroLineColor: "#fff",
//                 zeroLineWidth: 0
//             },
//             ticks: {
//                 fontFamily: "'Open Sans Bold', sans-serif",
//                 fontSize:11
//             },
//             stacked: true
//         }]
//     },
//     legend:{
//         display:false
//     },
// };

// function HarChart() {
//     //let element = document.getElementById("harChart");
//     let harRef = useRef();
//     useEffect(() => {

//         if(harRef.current){

//             let ctx = harRef.current.getContext("2d");

//             let harChart = new Chart(ctx, {
//                 type: 'horizontalBar',

//                 data: {
//                     labels: ["1", "2", "3", "4"],

//                     datasets: [{
//                         data: [50,150, 300, 400, 500],
//                         backgroundColor: "rgba(63,103,126,0)",
//                         hoverBackgroundColor: "rgba(50,90,100,0)"
//                     },
//                       {
//                         data: [100, 100, 200, 200, 100],
//                         backgroundColor: ['red', 'green', 'blue', 'yellow'],
//                     }]
//                 },
//                 options: barOptions_stacked,
//             });

//             var originalGetElementAtEvent = harChart.getElementAtEvent;
//             harChart.getElementAtEvent = function (e) {
//             return originalGetElementAtEvent.apply(this, arguments).filter(function (e) {
//                 return e._datasetIndex === 1;
//             });
//             }

//         }
//     }, [])

//     return (
//         <>

// 		<canvas ref={harRef}  id="harChart"></canvas>

//         </>
//     )
// }

// export default HarChart

// import Charts from 'app/components/Charts';
// import React from 'react'
// import { Waterfall }  from 'react-waterfall-chart'

// const data = [
//     {
//         labels: ['step 1'],
//         start: 0,
//         end: 3
//     },
//     {
//         labels: ['step 2'],
//         start: 3,
//         end: 9
//     },
//     {
//         labels: ['step 3'],
//         start: 9,
//         end: 10
//     }
// ];

// function HarChart() {
//     return (
//         <>

//          <Waterfall data={data}></Waterfall>
//          {/* <Charts shadow="false" ></Charts> */}

//         </>
//     )
// }

// export default HarChart

import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import Highcharts, { normalizeTickInterval } from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsReact from 'highcharts-react-official';

HighchartsMore(Highcharts);

const drawLines = function drawLines() {
  const { renderer } = this;
  const chartXAxisLeft = this.axes[0].left;
  const chartYAxisStart = this.axes[0].top;
  const columnWidth = this.axes[0].width / 4;

  for (let i = 1; i < 4; i++) {
    const columnStart = chartXAxisLeft + columnWidth * i;
    renderer
      .path({
        stroke: '#ccc',
        'stroke-width': 1,
        'stroke-dasharray': 4,
        d: [
          'M',
          columnStart,
          chartYAxisStart,
          'L',
          columnStart,
          this.chartHeight,
          'z',
        ], // path definition, note format
      })
      .add();
  }

  renderer
    .path([
      'M',
      chartXAxisLeft,
      chartYAxisStart,
      'L',
      chartXAxisLeft,
      this.chartHeight,
      'z',
    ])
    .attr({ stroke: '#cccccc', 'stroke-width': 1 })
    .add();
};

const chartOptions = {
  chart: {
    type: 'waterfall',
    inverted: true,
    events: {
      load: drawLines,
    },
  },
  xAxis: {
    type: 'category',
    lineWidth: 0,
  },
  title: false,
  plotOptions: {
    series: {
      stacking: 'normal',
    },
  },
  yAxis: {
    gridLineWidth: 0,
    minorGridLineWidth: 0,
  },

  legend: {
    enabled: false,
  },

  tooltip: {
    pointFormat: '<b>${point.y:,.2f}</b> USD',
  },

  //   series: [

  series: [
    // upColor: Highcharts.getOptions().red,
    // color: Highcharts.getOptions().colors[3],
    {
      data: [
        0,
        10,
        10,
        5,
        10,
        30,
        {
          isIntermediateSum: false,
        },
        {
          isSum: false,
        },
      ],
    },
    {
      data: [
        10,
        20,
        15,
        30,
        25,
        0,
        {
          isSum: false,
        },

        {
          isIntermediateSum: true,
        },
      ],
      lineWidth: 0,
    },
  ],

  credits: false,
};

function HarChart() {
  /// const chartRef = useRef(null);

  return (
    <div>
      <HighchartsReact
        //    ref={chartRef}
        highcharts={Highcharts}
        options={chartOptions}
      />
    </div>
  );
}

export default HarChart;
