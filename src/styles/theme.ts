import { extendTheme } from '@chakra-ui/react';
// import { Button } from 'app/components/Button';
import { Card } from 'app/pages/TestAnalytics/components/Card';

const theme = {
  components: { Card },
};

export const customTheme = extendTheme(theme);
