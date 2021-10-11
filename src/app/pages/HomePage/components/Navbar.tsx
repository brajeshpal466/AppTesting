// @ts-nocheck
import React from 'react';
//import PopUpNotificationComp from '../../GlobalComponents/PopUpNotificationComp'
import {
  Flex,
  Box,
  Image,
  Heading,
  Text,
  Button,
  Badge,
  Container,
} from '@chakra-ui/react';
import ButtonComp from '../../../components/ButtonComp';
import starticon from '../../../../styles/Assets/file-cog-outline.svg';
import starticon2 from '../../../../styles/Assets/Group 1776.svg';
import notification from '../../../../styles/Assets/notifications.svg';
import userIcon from '../../../../styles/Assets/user profile.svg';

const StartIcon = () => {
  return (
    <>
      <img src={starticon} alt="start"></img>
    </>
  );
};
const StartIcon2 = () => {
  return (
    <>
      <img src={starticon2} alt="start"></img>
    </>
  );
};
function Navbar({ startActionHandler, stopActionHandler }) {
  const notificationHandler = () => {
    document.getElementById('notification').style.display = 'block';
  };

  return (
    <Flex
      fontFamily="gothamBook"
      background="white1"
      height="70px"
      alignItems="center"
      boxSizing="border-box"
      position="sticky"
      zIndex="2"
      justifyContent="space-between"
      boxShadow="0px 3px 6px #00000029"
      backgroundColor="white1"
      color="black2"
    >
      <Flex alignItems="center" height="100%">
        <Flex width="" alignItems="center" height="50px">
          <Box paddingLeft="10px" height="40px" width="50px">
            <Image
              src="https://mozark.ai/wp-content/uploads/2020/01/cropped-mozark-logo-ws-280x280.png"
              alt="Brand"
            />
          </Box>
          <Text as="h2" fontSize="1.8rem " paddingLeft="15px">
            MOZARK
          </Text>
        </Flex>

        <Text marginLeft="8" fontSize="16px" color="black1">
          App Testing
        </Text>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" marginRight="4">
        <ButtonComp
          width="95px"
          height="35px"
          buttonHandler={startActionHandler}
          logo={<StartIcon></StartIcon>}
        >
          START
        </ButtonComp>
        <ButtonComp
          height="35px "
          buttonHandler={stopActionHandler}
          width="95px"
          padding=".5em 0em"
          logo={<StartIcon2></StartIcon2>}
        >
          STOP
        </ButtonComp>

        <Box pos="relative" marginLeft="2">
          <Box pos="absolute" right="-3px" top="-8px">
            <Flex
              onClick={notificationHandler}
              cursor="pointer"
              backgroundColor="red1"
              justifyContent="center"
              color="white1"
              alignItems="center"
              borderRadius="50%"
              height="24px"
              width="24px"
            >
              1
            </Flex>
          </Box>
          <Text cursor="pointer" width="8" onClick={notificationHandler}>
            <img src={notification} alt="notification" />
          </Text>
        </Box>
        <Box margin="10px" width="8" cursor="pointer" cursor="pointer">
          <img src={userIcon} alt="usericon" />
        </Box>
      </Flex>
    </Flex>
  );
}

export default Navbar;
