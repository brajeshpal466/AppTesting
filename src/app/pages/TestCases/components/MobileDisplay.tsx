import { Image } from '@chakra-ui/image';
import { Flex } from '@chakra-ui/layout';
import React from 'react';
import mobile from '../../../../styles/Assets/display1.png';
import play from '../../../../styles/Assets/Play.svg';
import stop from '../../../../styles/Assets/Stop.svg';
function MobileDisplay() {
  return (
    <Flex
      marginTop="4"
      width="260px"
      justifyContent="flex-start"
      alignItems="center"
      flexDirection="column"
    >
      <Image width="185px" marginTop="5px" height="371px" src={mobile}></Image>
      <Flex justifyContent="center" marginTop="7px" alignContent="center">
        <Image width="6" height="6" src={play} cursor="pointer"></Image>
        <Image
          width="6"
          marginLeft="4"
          height="6"
          cursor="pointer"
          src={stop}
        ></Image>
      </Flex>
    </Flex>
  );
}

export default MobileDisplay;
