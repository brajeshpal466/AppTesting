import { Image } from '@chakra-ui/image';
import { Flex } from '@chakra-ui/layout';
import React from 'react';
import mobile from '../../../../styles/Assets/display.png';
import play from '../../../../styles/Assets/Play.svg';
import stop from '../../../../styles/Assets/Stop.svg';
function MobileDisplay() {
  return (
    <Flex
      width="270px"
      justifyContent="flex-start"
      alignItems="center"
      flexDirection="column"
    >
      <Image width="185px" height="371px" marginTop="8" src={mobile}></Image>
      <Flex marginTop="1" justifyContent="center" alignContent="center">
        <Image width="6" height="6" src={play}></Image>
        <Image width="6" marginLeft="4" height="6" src={stop}></Image>
      </Flex>
    </Flex>
  );
}

export default MobileDisplay;
