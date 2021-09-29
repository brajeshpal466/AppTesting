import { extendTheme } from '@chakra-ui/react';
const colors = {
  white2: '#EEF0F8', // body color   , har graph background
  grey1: '#7E8299', // table heading and search placeholder font color, session id table bottom border
  grey2: '#707070', // table border bottom, vertical dotted line ,x axes tick
  grey13: '#3F4254', // table data and subtitle(test analytics) and status type ,notification card and sessionid table data title (test run id#45) font color nad sibebar background color
  white1: '#FFFFFF', // header ,subheader ,notification card , table layout backgraound color
  grey3: '#EDEDED', // table background color ,sessionid table background
  black2: '#1B1B28', // active sidebar link logo background color
  grey4: '#00000029', // header background color ,tooltip background
  blcak1: '#000000', // subheading(app testing) and table data font color x-axis ,har heading, indicate font color
  white3: '#F3F6F9', // button ,search bar and table head background color ,x axes slider
  blue1: '#008FE0', // primary  button font and notification card padding left
  red1: '#F51C5E', // notification badge , filter checkbox color,polygon icon
  grey5: '#B5B5C3', // sibar tab title and notification card hint title font,sessionid table heading font
  white4: '#FAFBFC', // sidebar tab title font on active , notification badge font
  blue2: '#3699FF', // sidebar tab active logo color
  blue3: '#0076BD', // notification card id no
  white5: '#F8F8F8', // graph background ,
  grey6: '#DEDEDE', // graph layout bg, x axes slider background
  green1: '#18D27A', // vertical fixed line
  blue4: '#12E3EB', // first vertical line , passed status font
  red2: '#FF0000', // failed status font color
  grey7: '#797A84', // notification search placeholder font ,radio button
  grey8: '#B2B2B2', // graph header background
  blue5: '#CEF2FE', // video analysis chart graph color
  white6: '#F9FAFC', //  header layout ,x axes boreder bottom
  grey9: '#858585', // chart layout
  blue6: '#094284', //
  red3: '#FF0C03', //
  grey10: '#787878',
  blue7: '#008EE0',
  grey11: '#A8A8A8', //slider
};

export const theme = extendTheme({
  colors,
});
