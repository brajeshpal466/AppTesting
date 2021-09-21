//@ts-nocheck
import React from 'react';
import { Button } from '@chakra-ui/react';
function ButtonComp({ logo, color, children, buttonHandler }) {
  return (
    <>
      <Button
        leftIcon={logo}
        cursor="pointer"
        onClick={buttonHandler}
        textColor={color}
        size="30"
        border="none"
        borderRadius="3px"
        margin="10px"
        padding="3px"
      >
        {children}
      </Button>
    </>
  );
}

export default ButtonComp;
