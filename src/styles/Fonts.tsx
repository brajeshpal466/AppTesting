// @ts-nocheck
import { Global } from '@emotion/react';
import { extendTheme } from '@chakra-ui/react';

export const Fonts = () => (
  <Global
    styles={`
     
      @font-face {
        font-family: 'Gotham-Book';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url('./Gotham-Font/GothamBook.ttf') format('ttf');
      
      }
 
      @font-face {
        font-family: 'Gotham-Medium';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('./Gotham-Font/GothamMedium.ttf') format('ttf');
       
      }
      @font-face {
        font-family: 'Gotham-Light';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url('./Gotham-Font/GothamLight.ttf') format('ttf');
       
      }
      `}
  />
);

const fontTheme = extendTheme({
  fonts: {
    gothamBook: 'Gotham-Book',
    gothamMedium: 'Gotham-Medium',
    gothamLight: 'Gotham-Light',
  },
});
export default fontTheme;
