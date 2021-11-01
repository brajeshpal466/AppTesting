//@ts-nocheck
import React from 'react';
import { Button } from '@chakra-ui/react';
function ButtonComp({
  logo,
  color,
  children,
  buttonHandler,
  padding,
  width,
  height,
  backgroundColor,
  marginLeft,
}) {
  return (
    <>
      <Button
        fontFamily="gothamMedium"
        backgroundColor={backgroundColor || 'white3'}
        leftIcon={logo}
        border="1px solid"
        borderColor="white3"
        cursor="pointer"
        onClick={buttonHandler}
        textColor="blue1"
        size="6"
        height={height}
        fontSize="14"
        width={width}
        border="none"
        fontWeight="medium"
        borderRadius="5"
        margin="1.5"
        marginLeft={marginLeft}
        padding={padding || '.6em 0em'}
      >
        {children}
      </Button>
    </>
  );
}

export default ButtonComp;
