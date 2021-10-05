// @ts-nocheck
import { Global } from '@emotion/react';
import { extendTheme } from '@chakra-ui/react';
/* @font-face {
  font-family: 'Gotham-Book';
  src: url('gotham-book.eot');
  src: url('gotham-book.eot?#iefix') format('embedded-opentype'),
       url('gotham-book.woff') format('woff'),
       url('gotham-book.ttf') format('truetype'),
       url('gotham-book.svg#gotham-book') format('svg');
  font-weight: normal;
  font-style: normal;
} */

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
        font-weight: 400;
        font-display: swap;
        src: url('./Gotham-Font/GothamMedium.ttf') format('ttf');
       
      }
      `}
  />
);

const fontTheme = extendTheme({
  fonts: {
    gothamBook: 'Gotham-Book',
    gothamMedium: 'Gotham-Medium',
  },
});
export default fontTheme;
