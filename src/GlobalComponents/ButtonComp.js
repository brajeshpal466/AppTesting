import React from 'react'
import {Button} from '@chakra-ui/react'
function ButtonComp({logo,color,children ,buttonHandler}) {
    return (
        <>
              <Button leftIcon={logo}  cursor="pointer"  onClick = {buttonHandler}  textColor={color} size="md" border="none" borderRadius="3px" margin="10px" padding ="5px">{children}</Button>
        </>
    )
}

export default ButtonComp
