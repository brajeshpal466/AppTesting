import { extendTheme } from '@chakra-ui/react';
import { Fonts } from './Fonts';
const fontTheme = extendTheme({
  fonts: {
    opensans: 'GothamBook',
    raleway: 'GothamMedium',
  },
});
export default fontTheme;
