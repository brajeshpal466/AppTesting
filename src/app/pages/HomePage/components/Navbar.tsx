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
function Navbar() {
  const notificationHandler = () => {
    document.getElementById('notification').style.display = 'block';
  };
  return (
    <Flex
      background="white1"
      height="50px"
      alignItems="center"
      position="sticky"
      justifyContent="space-between"
      boxShadow="1px 1px 4px grey"
      backgroundColor="white1"
      color="black2"
    >
      <Flex alignItems="center" height="100%">
        <Box height="40px" width="40px">
          <Image
            src="https://mozark.ai/wp-content/uploads/2020/01/cropped-mozark-logo-ws-280x280.png"
            alt="Brand"
          />
        </Box>
        <Text as="h2" fontSize="30px " paddingLeft="20px">
          Mozark
        </Text>
        <Text paddingLeft="50px" color="black1">
          App Testing
        </Text>
      </Flex>
      <Flex alignItems="center" justifyContent="flex-end">
        <ButtonComp logo={<StartIcon></StartIcon>} color="#008EF0">
          START
        </ButtonComp>
        <ButtonComp logo={<StartIcon2></StartIcon2>} color="#008EF0">
          STOP
        </ButtonComp>
        <Box margin-right="10px" position="">
          <Box buttonHandler={notificationHandler} w={25} h={25} color="grey">
            {' '}
          </Box>
          {/* notification popup */}
          {/* <PopUpNotificationComp width="300px"  height="100vh" ></PopUpNotificationComp> */}
        </Box>
        <Box margin="10px" pos="relative">
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
          <Text cursor="pointer" onClick={notificationHandler}>
            <img src={notification} alt="notification" />
          </Text>
        </Box>
        <Box margin="10px" cursor="pointer" cursor="pointer">
          <img src={userIcon} alt="usericon" />
        </Box>
      </Flex>
    </Flex>
  );
}

export default Navbar;
