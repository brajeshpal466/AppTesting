import React, { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4themes_dataviz from '@amcharts/amcharts4/themes/dataviz';
const data = [
  {
    country: 'Lithuania',
    litres: 501.9,
  },
  {
    country: 'Czechia',
    litres: 301.9,
  },
  {
    country: 'Ireland',
    litres: 201.1,
  },
  {
    country: 'Germany',
    litres: 165.8,
  },
  {
    country: 'Australia',
    litres: 139.9,
  },
];

function PieChart() {
  // Create chart instance
  useEffect(() => {
    const chart = am4core.create('chartdiv', am4charts.PieChart);
    chart.data = data;
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = 'litres';
    pieSeries.dataFields.category = 'country';
    //     chart.legend = new am4charts.Legend();
    //     chart.legend.position ="right";
    //     chart.legend.useDefaultMarker = true;
    // let marker = chart.legend.markers.template.children.getIndex(0);
  }, []);

  // Add data

  return <div id="chartdiv" style={{ width: '90px', height: '900px' }}></div>;
}

export default PieChart;
