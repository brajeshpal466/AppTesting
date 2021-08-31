import { Box, Container, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Icon } from '@chakra-ui/icons'
import { NavLink } from 'react-router-dom'
import { MdArrowForward, MdBugReport, MdCloud, MdCloudQueue, MdKeyboardArrowRight, MdList, MdPhonelinkSetup, MdSettings, MdTouchApp, MdWbCloudy } from 'react-icons/md'
import { useState } from 'react'
import SidebarTabComp from '../../GlobalComponents/SidebarTabComp'
import testAnalyticsIcon  from '../../Assets/Group 1447.svg'
import AutomationIcon  from '../../Assets/Automation.svg'
import debugReportIcon  from '../../Assets/debug report.svg'
import interactIcon  from '../../Assets/Interact.svg'
import deviceCloudIcon  from '../../Assets/device cloud.svg'
import settingsIcon  from '../../Assets/settings.svg'
function Sidebar() {
    const [sidebarToggle, setsidebarToggle] = useState(false)
    const handleSidebar = () => {
        setsidebarToggle(!sidebarToggle)
        const sidebarElement = document.getElementById('sidebarNav');
        sidebarElement.classList.toggle('active');
    }


    return (
        <Flex height="120vh" background="#404040" id="sidebarNav" className="sidebarShow " zIndex="2" flexDirection="column" position="absolute" left="0px" top="50px">
            <Flex height="50px" alignItems="center" justifyContent="flex-end" >
                <Icon as={MdKeyboardArrowRight} position="relative" right="0px" cursor="pointer" onClick={handleSidebar} backgroundColor="white" size="10px" borderRadius="50%" padding="5px" boxSizing="content-box" ></Icon>
            </Flex>
    <SidebarTabComp icon={<img src={testAnalyticsIcon} alt="test"/>}  link={'/'} sidebarToggle={sidebarToggle} >Test Analytcs </SidebarTabComp>    
    <SidebarTabComp icon={<img src={AutomationIcon} alt="img"/>} link={'/automationtest'} sidebarToggle={sidebarToggle} >Automation Test</SidebarTabComp>
    <SidebarTabComp icon={<img src={interactIcon} alt="img"/>} link={'/intracttest'} sidebarToggle={sidebarToggle} >Intract Test</SidebarTabComp>
    <SidebarTabComp icon={<img src={debugReportIcon} alt="img"/>} link={'/debugreport'} sidebarToggle={sidebarToggle} >Debug Report</SidebarTabComp>
    <SidebarTabComp icon={<img src={deviceCloudIcon} alt="img"/>} link={'/devicecloud'} sidebarToggle={sidebarToggle} >Device Cloud</SidebarTabComp>
    <SidebarTabComp icon={<img src={settingsIcon} alt="img"/>} link={'/settings'} sidebarToggle={sidebarToggle} >Settings</SidebarTabComp>
       
        </Flex>
    )
}

export default Sidebar
