// @ts-nocheck
import { Box, Container, Flex, Img, Text } from '@chakra-ui/react';
import React from 'react';
import { Icon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';

import { useState } from 'react';
import SidebarTabComp from './SidebarTabComp';
import testAnalyticsIcon from '../../../../styles/Assets/Group 1447.svg';
import AutomationIcon from '../../../../styles/Assets/Automation.svg';
import debugReportIcon from '../../../../styles/Assets/debug report.svg';
import interactIcon from '../../../../styles/Assets/Interact.svg';
import deviceCloudIcon from '../../../../styles/Assets/device cloud.svg';
import settingsIcon from '../../../../styles/Assets/settings.svg';
import rightArrow from '../../../../styles/Assets/expand btn.png';
import leftArrow from '../../../../styles/Assets/expand btn.png';

function Sidebar() {
  const [sidebarToggle, setsidebarToggle] = useState(false);
  const handleSidebar = () => {
    setsidebarToggle(!sidebarToggle);
    const sidebarElement = document.getElementById('sidebarNav');
    sidebarElement.classList.toggle('active');
  };

  return (
    <Flex
      height="100vh"
      background="grey13"
      id="sidebarNav"
      className="sidebarShow "
      zIndex="2"
      flexDirection="column"
      position="absolute"
      left="0px"
      top="50px"
    >
      <Flex height="44px" alignItems="center" justifyContent="flex-end">
        <Box
          position="relative"
          right="-17px"
          width="32px"
          onClick={handleSidebar}
        >
          {' '}
          {!sidebarToggle && <Img src={rightArrow} alt="right" />}
          {sidebarToggle && (
            <img
              style={{ transform: 'rotate(180deg)' }}
              src={rightArrow}
              alt="left"
            />
          )}
        </Box>
      </Flex>
      <SidebarTabComp
        icon={<img src={testAnalyticsIcon} alt="test" />}
        link={'/'}
        sidebarToggle={sidebarToggle}
      >
        Test Analytics{' '}
      </SidebarTabComp>
      <SidebarTabComp
        icon={<img src={AutomationIcon} alt="img" />}
        link={'/automationtest'}
        sidebarToggle={sidebarToggle}
      >
        Automation Test
      </SidebarTabComp>
      <SidebarTabComp
        icon={<img src={interactIcon} alt="img" />}
        link={'/intracttest'}
        sidebarToggle={sidebarToggle}
      >
        Intract Test
      </SidebarTabComp>
      <SidebarTabComp
        icon={<img src={debugReportIcon} alt="img" />}
        link={'/debugreport'}
        sidebarToggle={sidebarToggle}
      >
        Debug Report
      </SidebarTabComp>
      <SidebarTabComp
        icon={<img src={deviceCloudIcon} alt="img" />}
        link={'/devicecloud'}
        sidebarToggle={sidebarToggle}
      >
        Device Cloud
      </SidebarTabComp>
      <SidebarTabComp
        icon={<img src={settingsIcon} alt="img" />}
        link={'/settings'}
        sidebarToggle={sidebarToggle}
      >
        Settings
      </SidebarTabComp>
    </Flex>
  );
}

export default Sidebar;
