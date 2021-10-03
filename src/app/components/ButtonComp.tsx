//@ts-nocheck
import React from 'react';
import { Button } from '@chakra-ui/react';
function ButtonComp({ logo, color, children, buttonHandler, padding, width }) {
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
        width={width}
        border="none"
        borderRadius="1"
        margin="2.5"
        padding={padding || '.6em 0em'}
      >
        {children}
      </Button>
    </>
  );
}

export default ButtonComp;
