import { Container, 
    Flex,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    Spacer,
    Text
} from '@chakra-ui/react'
import React from 'react'
const data = 
[
    {
    id : 45,
    date :"15 july 2021",
     text : "High memory uses for test run"    
},
    {
    id : 45,
    date :"15 july 2021",
     text : "High memory uses for test run"    
},
    {
    id : 45,
    date :"15 july 2021",
     text : "High memory uses for test run"    
},
    {
    id : 45,
    date :"15 july 2021",
     text : "High memory uses for test run"    
},
    {
    id : 45,
    date :"15 july 2021",
     text : "High memory uses for test run"    
}

];

function NotificationComp() {
    return (
        <Flex color="green" h="100%" padding="5px 10px" width="100%" flexDirection="column">
{
    data.map((item)=>
    <>
  <Stat size="sm" flexDirection="column"   height="70px" id={item.id} boxShadow=".5px .5px 3px grey" borderLeft="3px solid blue" marginBottom="5px" border=" " borderRadius="3px" padding="5px" boxSizing="border-box">
    <p>{item.date}</p>
    <Text>{item.text}#{item.id}</Text>
</Stat>
    </>
    )
}
        </Flex>
    )
}

export default NotificationComp
