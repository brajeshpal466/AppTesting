//@ts-nocheck
import React from 'react';
import { Button } from '@chakra-ui/react';
function ButtonComp({ logo, color, children, buttonHandler, padding, width }) {
  return (
    <>
      <Button
        backgroundColor="white3"
        leftIcon={logo}
        border="1px solid"
        borderColor="white3"
        cursor="pointer"
        onClick={buttonHandler}
        textColor="blue1"
        size="6"
        fontSize="14"
        width={width}
        border="none"
        fontWeight="medium"
        borderRadius="4 "
        margin="2.5"
        padding={padding || '.6em 0em'}
      >
        {children}
      </Button>
    </>
  );
}

export default ButtonComp;
