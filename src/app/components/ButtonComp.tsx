//@ts-nocheck
import React from 'react';
import { Button } from '@chakra-ui/react';
function ButtonComp({ logo, color, children, buttonHandler }) {
  return (
    <>
      <Button
        backgroundColor="white3"
        leftIcon={logo}
        cursor="pointer"
        onClick={buttonHandler}
        textColor="blue1"
        size="6"
        fontSize="11"
        border="none"
        borderRadius="1"
        margin="2.5"
        padding="2px 8px "
      >
        {children}
      </Button>
    </>
  );
}

export default ButtonComp;
