import React from 'react'

import { Alert, Box, Container, Flex,Text } from '@chakra-ui/react';
import {NavLink,Route,Switch}  from 'react-router-dom'
import SelectComp from '../GlobalComponents/SelectComp';
import SearchBar from '../GlobalComponents/SearchBar';
import NotificationComp from './NotificationComp';
import AlertComp from './AlertComp';
function Notifiacation() {
    return (
        <>
          <Flex  boxShadow="1px 1px 5px grey" padding="10px" height="100vh" flexDirection="column" width="400px" position="fixed" right="0" top="0">
      	<Flex justifyContent="flex-end" >&#x2715; </Flex>
       <Flex justifyContent="space-evenly" borderBottom="2px solid grey ">
       <Text as="span" >
       <NavLink  to="/"  >Notification</NavLink>
       </Text>
       <Text as="span">
       <NavLink  to="/alert"  textDecoration="none"> Alert</NavLink>
       </Text>
       </Flex>
       <Flex justifyContent="space-around" padding="10px 15px">
         <Container >    <SearchBar></SearchBar></Container>
         <Container><SelectComp placeHolder="7 days" ></SelectComp></Container>
       </Flex>
       <Container padding="10px">
       <NotificationComp></NotificationComp>
       </Container>
    </Flex>
  

       
        </>
    )
}

export default Notifiacation
