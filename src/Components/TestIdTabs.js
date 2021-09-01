import React from 'react'
import {NavLink}  from 'react-router-dom'
import {Grid, Flex ,Box,Text, GridItem} from '@chakra-ui/react'
import TestCase from './TestCase'
function TestIdTabs() {
    return (
        <>
        <Flex padding="10px" boxShadow=".5px .5px 1px grey">
            <Box padding="0px 10px" >
            <NavLink to="/" style={{textDecoration:'none'}} > TEST CASE</NavLink>
            </Box>
            <Box padding="0px 10px " >
            <NavLink to="/exprecekpi"  style={{textDecoration:'none'}} >EXPRENCE KPI </NavLink>
            </Box>
            <Box padding="0px 10px" >
            <NavLink to="/vedioanalysis" style={{textDecoration:'none'}} >VEDIO ANALYSIS </NavLink>
            </Box>
            <Box padding="0px 10px" >
            <NavLink to="/vedioanalysis" style={{textDecoration:'none'}} >APP PROFILLING </NavLink>
            </Box>
            <Box padding="0px 10px" >
            <NavLink to="/vedioanalysis" style={{textDecoration:'none'}} >HRA ANALYSIS </NavLink>
            </Box>
        </Flex>
      <TestCase></TestCase>

</>
    )
}

export default TestIdTabs
