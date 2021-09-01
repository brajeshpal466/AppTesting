import React from 'react'
import {Flex,Box,Text} from  '@chakra-ui/react'
import MobileDisplay  from './MobileDisplay'
import SummaryTable from './SummaryTable'
function TestCase() {
    return (
        <>
        <Flex  minHeight="380px" boxSizing="border-box">
        <Box width="300px"  >
        <MobileDisplay></MobileDisplay>
        </Box>
        <Box flex="1" > 
        <Flex flexDirection="column" h="100%" > 
        <Box flex="1" height="500px">graph</Box>
        <Box  >
        <SummaryTable></SummaryTable>
        </Box>
        </Flex>
        </Box>
        </Flex>  
        </>
    )
}

export default TestCase
