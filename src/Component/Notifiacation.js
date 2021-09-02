import React from 'react'

import { Alert, Box, Container, Flex,Text ,Badge,
CloseButton,
Circle,
Center} from '@chakra-ui/react';
import {NavLink,Route,Switch}  from 'react-router-dom'
import SelectComp from '../GlobalComponents/SelectComp';
import SearchBar from '../GlobalComponents/SearchBar';
import NotificationComp from './NotificationComp';
import AlertComp from './AlertComp';
function Notifiacation() {
    return (
        <>
          <Flex  boxShadow="1px 1px 5px grey" padding="10px" height="100vh" flexDirection="column" width="400px" position="fixed" right="0" top="0">
         <Flex justifyContent="flex-end">
         <CloseButton size="sm" float="right" border="none" bgColor="#ffff" />
         </Flex>
          
       <Flex justifyContent="flex-start" borderBottom="2px solid grey " paddingBottom="10px">
       <Flex as="span"  >
       <NavLink  to="/" style={{ textDecoration: "none"}} >Notification  </NavLink>
       
       <Badge ml="1" padding="4px" backgroundColor="red" fontWeight="bold" borderRadius="50%" colorScheme="white"  fontSize="11px" width="8px" height="10px"   variant="solid" >
        <Center>2</Center>
      </Badge>
       </Flex>
       
       <Flex as="span">
       <NavLink  to="/alert" style={{ textDecoration:"none"}}> Alert</NavLink>
       <Badge ml="1" padding="4px" backgroundColor="red"  fontWeight="bold" colorScheme="white" borderRadius="50%" fontSize="11px" width="8px" height="10px"   variant="solid" >
        <Center>3</Center>
      </Badge>
      
       </Flex>
       </Flex>
       <Flex justifyContent="space-around" >
         <Container >    <SearchBar></SearchBar></Container>
         <Container><SelectComp  ></SelectComp></Container>
       </Flex>
       <Container padding="10px">
       <NotificationComp></NotificationComp>
       </Container>
    </Flex>
  

       
        </>
    )
}

export default Notifiacation
