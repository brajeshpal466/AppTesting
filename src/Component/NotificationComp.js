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
},
{
    id : 45,
    date :"15 july 2021",
     text : "High memory uses for test run"    
}

];

function NotificationComp() {
    return (
        <Flex color="black"  overflowY="auto" padding="5px 10px" height="600px" overflowY="scroll"  flexDirection="column" height="600px" >
{
    data.map((item)=>
    <>
  <Flex size="sm" justifyContent="flex-end" id={item.id} boxShadow=".5px .5px 2px 0px grey"   flexDirection="column" marginBottom="10px"  borderRadius="3px" padding="5px" boxSizing="border-box">
    <Text as="span"  >{item.date}</Text>
    <Text as="h5"  >{item.text}#{item.id}</Text>
</Flex>
    </>
    )
}
        </Flex>
    )
}

export default NotificationComp
