// @ts-nocheck
import React from 'react';
import { useRef, useEffect, useState } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4themes_dataviz from '@amcharts/amcharts4/themes/dataviz';
import { Box, Flex } from '@chakra-ui/layout';
import Summary from '../../../../styles/Assets/Summary.svg';
import Issuesummary from '../../../../styles/Assets/Issue Summary.svg';
import { Img } from '@chakra-ui/image';
import PopupComp from 'app/components/PopupComp';
import HarChartStatus from '../Components/HarChartStatus';
import SummaryCard from '../Components/SummaryCard';
import DataExchangeCard from '../Components/DataExchangeCard';
import SummaryPieBox from '../Components/SummaryPieBox';
import TopAssets from '../Components/TopAssets';
import RadioCheckbox from '../Components/RadioCheckbox';

// Themes begin
am4core.useTheme(am4themes_dataviz);
am4core.useTheme(am4themes_animated);
// Themes end

const dataHttps = [
  'https://interim.api/script1',
  'https://interim.api/script1',
  'https://interim.api/script1',
];
const dataServerTime = [
  'https://interim.api/script1',
  'https://interim.api/script1',
  'https://interim.api/script1',
];
const loadTime = ['https://interim.api/script1'];
const notOptmise = ['https://interim.api/script1'];

const data = [
  {
    category: 'https://interim.api/script1',
    open1: 50,
    close1: 83,
    open2: 83,
    close2: 128,
  },
  {
    category: 'https://interim.api/script2',
    open1: 0,
    close1: 83,
    open2: 83,
    close2: 128,
  },

  {
    category: 'https://interim.api/script3',
    open1: 121,
    close1: 128,
    open2: 128,
    close2: 128,
  },
  {
    category: 'https://interim.api/script4',
    open1: 111,
    close1: 114,
    open2: 114,
    close2: 121,
  },
  {
    category: 'https://interim.api/script5',
    open1: 98,
    close1: 108,
    open2: 108,
    close2: 111,
  },
  {
    category: 'https://interim.api/script6',
    open1: 85,
    close1: 96,
    open2: 96,
    close2: 98,
  },
  {
    category: 'https://interim.api/script7',
    open1: 40,
    close1: 70,
    open2: 70,
    close2: 85,
  },
  {
    category: 'https://interim.api/script8',
    open1: 3,
    close1: 36,
    open2: 36,
    close2: 55,
  },
  {
    category: 'https://interim.api/script',
    open1: 0,
    close1: 2,
    open2: 2,
    close2: 3,
  },
  {
    category: 'https://interim.api/script0',
    open1: 0,
    close1: 2,
    open2: 2,
    close2: 3,
  },
  {
    category: 'https://interim.api/script9',
    open1: 0,
    close1: 2,
    open2: 2,
    close2: 3,
  },
  {
    category: 'https://interim.api/script10',
    open1: 0,
    close1: 2,
    open2: 2,
    close2: 3,
  },
  {
    category: 'https://interim.api/script11',
    open1: 0,
    close1: 2,
    open2: 2,
    close2: 3,
  },
  {
    category: 'https://interim.api/script12',
    open1: 0,
    close1: 2,
    open2: 2,
    close2: 3,
  },
  {
    category: 'https://interim.api/script13',
    open1: 0,
    close1: 20,
    open2: 20,
    close2: 40,
  },
];

// Create chart instance

function HarChart() {
  const [activePopup, setActivePopup] = useState(false);
  const [togglePopup, setTogglePopup] = useState(false);
  useEffect(() => {
    var chart = am4core.create('chartdiv', am4charts.XYChart);
    console.log(document.getElementById('chartdiv'));
    // Add data
    chart.data = data;
    am4core.color('#ff0000');
    am4core.addLicense('ch-custom-attribution');
    // Create axes
    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'category';
    categoryAxis.renderer.labels.template.rotation = true;
    categoryAxis.renderer.labels.template.font = '14px';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 22;
    categoryAxis.renderer.ticks.template.disabled = false;
    categoryAxis.renderer.ticks.template.strokeOpacity = 0;
    categoryAxis.renderer.labels.template.width = 150;
    categoryAxis.renderer.grid.template.strokeWidth = 1;

    //categoryAxis.renderer.inversed = true ;
    //categoryAxis.renderer.labels.template.rotation = -25;
    //categoryAxis.renderer.labels.template.horizontalCenter = "right";
    var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.calculateTotals = true;
    valueAxis.renderer.grid.template.strokeWidth = 0;
    valueAxis.renderer.opposite = true;
    valueAxis.renderer.labels.template.disabled = true;

    //categoryAxis.renderer.inversed = true ;
    // Create series
    function createSeries(open, close, names, showSum, color) {
      var series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueX = close;
      series.dataFields.openValueX = open;
      // series.name = name;

      series.dataFields.categoryY = 'category';
      series.clustered = false;
      series.strokeWidth = 0;
      series.fill = am4core.color(names == 'High' ? '#5FA730' : '#2F7CCB');
      //series.fill = am4core.color( names == "Medium" ? '#2F7CCB' : '');

      series.columns.template.width = am4core.percent(70);
      series.stroke = am4core.color('#000000');
      // var labelBullet = series.bullets.push(new am4charts.LabelBullet());
      // labelBullet.label.hideOversized = true;
      // labelBullet.label.fill = am4core.color("#fff");
      // labelBullet.label.text = "{valueX}";
      // labelBullet.label.adapter.add("text", function(text, target) {
      //   var val = Math.abs(target.dataItem.valueX - target.dataItem.openValueX);
      //   return val;
      // });
      // labelBullet.locationX = 0.4;

      if (showSum) {
        var sumBullet = series.bullets.push(new am4charts.LabelBullet());
        sumBullet.label.text = '{valueX.close}';
        sumBullet.verticalCenter = 'bottom';
        sumBullet.locationX = -0.2;
        sumBullet.dy = 0;
        sumBullet.dx = 1;
        sumBullet.label.adapter.add('text', function (text, target) {
          var val = Math.abs(
            target.dataItem.dataContext.close2 -
              target.dataItem.dataContext.open1,
          );
          return val;
        });
      }
    }

    createSeries('open1', 'close1', 'High', false, '#5FA730');
    createSeries('open2', 'close2', 'Medium', true, ' #2F7CCB');
  }, []);

  const popupHandler = () => {
    setTogglePopup(true);
  };
  const issuSummary = () => {
    setActivePopup(true);
  };
  const activeSummary = () => {
    setActivePopup(false);
  };

  return (
    <>
      {/* har chart element  */}
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          position: 'relative',
          boxShadow: '0px 0px 6px #00000029 inset',
        }}
        id="chartdiv"
      ></div>

      {/* <RadioCheckbox ></RadioCheckbox>   */}
      {/* <HarChartStatus></HarChartStatus> */}
      <Flex
        position="absolute"
        flexDirection="column"
        width="46px"
        boxShadow="0px 3px 6px #00000029"
        borderRadius="2px"
        height="89px"
        zIndex="10"
        background="white"
        right="-30px"
        top="200px"
        alignItems="center"
        justifyContent="space-around"
      >
        <Flex
          onClick={popupHandler}
          justifyContent="center"
          alignItems="center"
          height="35px"
          width="35px"
          _hover={{ background: 'blue1' }}
          _active={{ background: 'blue1' }}
        >
          <Img
            src={Issuesummary}
            onClick={issuSummary}
            backgroundColor="transparent"
            alt="issue"
          ></Img>
        </Flex>
        <Flex
          onClick={popupHandler}
          justifyContent="center"
          alignItems="center"
          height="35px"
          width="35px"
          _hover={{ background: 'blue1' }}
          _active={{ background: 'blue1' }}
        >
          <Img
            onClick={activeSummary}
            src={Summary}
            backgroundColor="transparent"
            alt="summary"
          ></Img>
        </Flex>
      </Flex>
      {/* summay popup */}
      {!activePopup && (
        <PopupComp
          setTogglePopup={setTogglePopup}
          togglePopup={togglePopup}
          setActivePopup={setActivePopup}
          title="Summary"
        >
          <DataExchangeCard></DataExchangeCard>
          <Flex margin="10px 0px" justifyContent="center">
            <SummaryPieBox
              title="Timing KPI"
              subtitle="All URL"
            ></SummaryPieBox>
            <SummaryPieBox title="Assets" subtitle=""></SummaryPieBox>
          </Flex>
          <TopAssets></TopAssets>
        </PopupComp>
      )}

      {/* isuue summary */}
      {activePopup && (
        <PopupComp
          setTogglePopup={setTogglePopup}
          togglePopup={togglePopup}
          setActivePopup={setActivePopup}
          title="Isssu Summary"
        >
          <SummaryCard title="HTTPS Errors" data={dataHttps}></SummaryCard>
          <SummaryCard title="Server Time" data={dataServerTime}></SummaryCard>
          <SummaryCard title=" " data={dataServerTime}></SummaryCard>
          <SummaryCard title="Load Time" data={loadTime}></SummaryCard>
          <SummaryCard
            title="Non Optimise Assest Format"
            data={notOptmise}
          ></SummaryCard>
        </PopupComp>
      )}
    </>
  );
}

export default HarChart;
