//@ts-nocheck
import { Flex } from '@chakra-ui/layout';
import React from 'react';

function MainContainerWrapper({ children, sidebarToggle, handleSidebar }) {
  return (
    <>
      <Flex
        fontFamily="Gotham-Book"
        fontSize="14px"
        marginLeft="63px"
        background="white2"
        flexDirection="column"
        position="relative"
        fontWeight="medium"
      >
        <Flex
          position="absolute"
          onClick={handleSidebar}
          display={sidebarToggle ? 'block' : 'none'}
          left="0px"
          top="0px"
          width="100%"
          height="100%"
          zIndex="1"
          background="grey14"
        ></Flex>
        {children}
      </Flex>
    </>
  );
}

export default MainContainerWrapper;
