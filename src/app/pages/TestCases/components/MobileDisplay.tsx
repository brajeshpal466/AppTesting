import { Image } from '@chakra-ui/image';
import { Flex } from '@chakra-ui/layout';
import React from 'react';
import mobile from '../../../../styles/Assets/display.png';
function MobileDisplay() {
  return (
    <Flex
      height="371px"
      alignItems="center"
      justifyContent="center"
      width="210px"
    >
      <Image src={mobile}></Image>
    </Flex>
  );
}

export default MobileDisplay;
