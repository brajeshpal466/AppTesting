import { useState } from 'react';
import React from 'react';
import { Text, Flex, Box } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { Icon } from '@chakra-ui/react';
function SidebarTabComp({ link, icon, children, sidebarToggle }) {
  return (
    <>
      <Flex height="40px">
        <NavLink
          exact
          to={link}
          color="black2"
          style={{ textDecoration: 'none', color: 'grey', width: '100%' }}
          activeClassName="activeLink"
        >
          <Flex height="100%" alignItems="center" className="flex">
            <Box className="box" width="30" height="30" margin=" 0px 13px">
              {/* <Icon as={icon}  w={30} h={30} margin=" 0px 13px" ></Icon> */}
              {icon}
            </Box>
            {sidebarToggle && (
              <Text color="grey5" className="text">
                {children}
              </Text>
            )}
          </Flex>
        </NavLink>
      </Flex>
    </>
  );
}

export default SidebarTabComp;
