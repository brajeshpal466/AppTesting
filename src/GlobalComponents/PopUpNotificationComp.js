import { Flex } from '@chakra-ui/react'
import React from 'react'

function PopUpNotificationComp({width,height}) {
    return (
        <>
         <Flex zIndex="10" width={width} backgroundColor="wheat"  height={height} position="fixed" right="0px" top="0px">
             
             </Flex>   
        </>
    )
}

export default PopUpNotificationComp
