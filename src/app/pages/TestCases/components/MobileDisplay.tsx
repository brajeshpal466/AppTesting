import { Image } from '@chakra-ui/image';
import { Flex } from '@chakra-ui/layout';
import React from 'react';
import mobile from '../../../../styles/Assets/display.png';
function MobileDisplay() {
  return (
    <Flex width="272px" justifyContent="center">
      <Image width="185px" height="371px" marginTop="30px" src={mobile}></Image>
    </Flex>
  );
}

export default MobileDisplay;
