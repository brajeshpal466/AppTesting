import { Flex, Text, CloseButton, Img } from '@chakra-ui/react';
import React from 'react';
import copyIcon from '../../styles/Assets/Icon material-content-copy.svg';

function PopupComp({
  setActivePopup,
  title,
  togglePopup,
  setTogglePopup,
  children,
}) {
  return (
    <Flex
      fontFamily="Montserrat"
      fontWeight="500"
      fontSize="14px"
      overflow="hidden"
      height="546px"
      zIndex="5"
      display={togglePopup ? 'block' : 'none'}
      flexDirection="column"
      position="absolute"
      width="484px"
      backgroundColor="white1"
      boxShadow="0px 3px 6px #00000029"
      right="-5px"
      top="-10px"
      borderRadius="5px"
    >
      <Flex
        padding="20px 25px"
        paddingBottom="10px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text fontFamily="Montserrat" fontWeight="600" as="b" color="black1">
          {' '}
          {title}
          <Img
            paddingLeft="5px"
            width="14px"
            height="16px"
            display="inline-block"
            src={copyIcon}
          ></Img>
        </Text>
        <CloseButton onClick={() => setTogglePopup(false)}></CloseButton>
      </Flex>
      <div>{children}</div>
    </Flex>
  );
}

export default PopupComp;
