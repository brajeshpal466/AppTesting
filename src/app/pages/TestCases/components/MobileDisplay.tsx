import { Flex } from '@chakra-ui/layout';
import React from 'react';
import mobile from '../../../../styles/Assets/display.png';
function MobileDisplay() {
  return (
    <Flex
      height="371px"
      alignItems="center"
      justifyContent="center"
      padding="40px 20px"
      width="185px"
    >
      <img src={mobile}></img>
    </Flex>
  );
}

export default MobileDisplay;
