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
  Icon,
  Container,
} from '@chakra-ui/react';
import ButtonComp from './ButtonComp';
import starticon from '../../styles/Assets/file-cog-outline.svg';
import starticon2 from '../../styles/Assets/Group 1776.svg';
import notification from '../../styles/Assets/notifications.svg';
import userIcon from '../../styles/Assets/user profile.svg';

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
  const notificationHandler = () => {};
  return (
    <Flex
      height="50px"
      alignItems="center"
      position="sticky"
      justifyContent="space-between"
      boxShadow="1px 1px 4px grey"
      backgroundColor="#ffffff"
    >
      <Flex alignItems="center" height="100%">
        <Box height="40px" width="40px">
          <Image
            src="https://mozark.ai/wp-content/uploads/2020/01/cropped-mozark-logo-ws-280x280.png"
            alt="Brand"
          />
        </Box>
        <Text as="h2" fontSize="30px " paddingLeft="10px">
          Mozark
        </Text>
        <Text paddingLeft="10px">App Testing</Text>
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
        <Box margin="10px">
          <img src={notification} alt="notification" />
        </Box>
        <Box margin="10px">
          <img src={userIcon} alt="notification" />
        </Box>
      </Flex>
    </Flex>
  );
}

export default Navbar;
