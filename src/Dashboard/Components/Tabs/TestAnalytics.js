
import {MdFilterList, MdFilterListRounded, MdNotificationsNone, MdPersonOutline, MdPhonelinkSetup, MdSearch, MdTouchApp } from 'react-icons/md';
import {Icon}  from '@chakra-ui/icons'
import { Container,
     Flex,
     Text,
     Heading, 
     Button,
     Box} from '@chakra-ui/react'
import {React ,useEffect, useState}from 'react'
import { Apidata } from '../../../Data';
import config from '../../../Assets/file-cog-outline.svg';
 import Tables from '../../../GlobalComponents/Tables'
import ButtonComp from '../../../GlobalComponents/ButtonComp';
import SearchBar from '../../../GlobalComponents/SearchBar';
import  PopUpComp from '../../../GlobalComponents/PopUpComp'
import SelectComp from '../../../GlobalComponents/SelectComp';


 const tableHeaders =  [
    " Status",
    "Started On",
    "Id",
    "Project",
    "Build",
    "Script",
    "Device",
    "User"
];
const filterType = [
    "Test Type",
     "Test Id",
     "Date",
     "Project",
     "Build",
     "Script",
     "Device",
     "User"
]

let filterSelect = [
    {
        id : 1,
        filterKey : "Test Id",
        optionList : [1,2,4,4,5],
        type: "string"
    },
    {
        id : 2,
        filterKey : "Test type",
        optionList : [1,2,4,4,5],
        type: "string"
    },
    {
        id : 4,
        filterKey : "Script",
        optionList : [1,2,4,4,5],
        type: "string"
    },
    {
        id : 5,
        filterKey : "User",
        optionList : [1,2,4,4,5],
        type: "date"
    }
    
]


function TestAnalytics() {
 const [tableListData, setdata] = useState([]);    
 const [filterDropdown, setfilterDropdown] = useState(false)
 useEffect(() => {
    Apidata().then((result)=> 
   setdata(result) 
 ).catch( (error)=>{
     console.log(error);
   }
   )  
 }, [])
  
   
   const filterHandler = ()=>{
       setfilterDropdown(!filterDropdown);
   }

// console.log(tableListData);
    return (
        <Flex flexDirection="column" color="#3F4254" background="" width="100%" >
            
            <Flex background="" height="50px" alignItems="center" justifyContent="space-between" paddingLeft="10px">
                <Text>Test Analytics</Text>
                <Flex flexDirection="row" alignItems="center" justifyContent="space-between" marginRight="">
                
                <SearchBar> </SearchBar>
                
          
                 <Flex alignItems="center" justifyContent="space-around" paddingLeft="10px">
                 <Text padding="10px"><b>5</b>&nbsp;Running</Text>
                 <Text padding="10px"><b>5</b>&nbsp;Running</Text>
                 <Text padding="10px"><b>5</b>&nbsp;Running</Text>
                 </Flex>   
                </Flex>
            </Flex>
            
            <Flex  border="20px solid #f2f2f2" height="90vh" bgColor ="#ffffff" boxSizing="border-box" padding="15px"
            flexDirection="column">
                <Flex padding="0px 0px"  alignItems="center" position="relative" >
                 <ButtonComp logo={< MdFilterList/>} buttonHandler ={filterHandler}  color="#008EF0">Fiter</ButtonComp>
                <Flex alignItems="center">
    
                {filterSelect && filterSelect.map((item,index)=>{

                return (<SelectComp id={index}  padding="10px" placeHolder ={item.filterKey} optionList={item.optionList}></SelectComp>);
                }
                )
            
        }
                <ButtonComp color="#008EF0" >APPLY</ButtonComp>   
                <ButtonComp logo={< MdFilterList/>} color="grey" >Reset</ButtonComp>   
             </Flex>
            { filterDropdown && <PopUpComp selectType={filterType} ></PopUpComp> }
                </Flex>

      
            <Tables tableHeaders={tableHeaders}  tableListData={tableListData} ></Tables>
          
                </Flex>
        
        </Flex>
    )
}

export default TestAnalytics
