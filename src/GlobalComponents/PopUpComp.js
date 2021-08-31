import { Button, Container, Flex, Input } from '@chakra-ui/react'
import React from 'react'
import ButtonComp from './ButtonComp'

function PopUpComp({selectType}) {
    return (
        <Flex  position="absolute" bgColor="#ffffff" zIndex="1" top="38px" left="10px" paddingTop="10px" width="130px" flexDirection="column" >
           
           
           {selectType.map((item,index)=>
                <Container id={index}  paddingLeft="10px" >
                <Input type="checkbox" checked="false" bgColor="red" ></Input> <label>{item}</label>
                </Container>
           )}
       
           <Flex  alignItems="center" justifyContent="space-between">
           <ButtonComp color="grey" >Clear</ButtonComp>
           <ButtonComp  color="#008EF0" >Add</ButtonComp>
           </Flex>
        </Flex>
    )
}

export default PopUpComp
