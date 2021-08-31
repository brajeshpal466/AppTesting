import React from 'react'
import { PhoneIcon, AddIcon, WarningIcon,Icon } from '@chakra-ui/icons'
import { MdNotificationsNone, MdPersonOutline, MdPhonelinkSetup, MdTouchApp } from 'react-icons/md';
import PopUpNotificationComp from '../../GlobalComponents/PopUpNotificationComp'
import {
    Flex,
    Box,
    Image,
    Heading,
    Text,
    Button
  }  from "@chakra-ui/react"
import ButtonComp from '../../GlobalComponents/ButtonComp';

function Navbar() {
const notificationHandler =() =>{

}
  return (
        <Flex  height="50px" alignItems="center" position="sticky" justifyContent="space-between" boxShadow="1px 1px 4px grey"  backgroundColor="#ffffff">
    <Flex  alignItems="center">
    <Box boxSize="sm">
  <Image src="https://mozark.ai/wp-content/uploads/2020/01/cropped-mozark-logo-ws-280x280.png" width="40px" alt="Brand" />
</Box>
        <Heading paddingLeft="10px" >Mozark</Heading>
        <Text paddingLeft="10px">App Testing</Text>
        </Flex>
    <Flex alignItems="center" justifyContent="flex-end">
    <ButtonComp logo={< MdPhonelinkSetup/>}  color="#008EF0" >START</ButtonComp>
    <ButtonComp  logo={<MdTouchApp />}  color="#008EF0" >STOP</ButtonComp>
   <Box  margin-right="10px" position="" >
   <Icon as={MdNotificationsNone} buttonHandler={notificationHandler} w={25} h={25} color="grey"/>
  {/* notification popup */}
   {/* <PopUpNotificationComp width="300px"  height="100vh" ></PopUpNotificationComp> */}
   </Box>
   <Box  margin="10px"><Icon as={MdPersonOutline}  w={25} h={25} color="grey"/></Box>    
    </Flex>
        </Flex>
    )
}

export default Navbar
