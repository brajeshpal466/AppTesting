import React from 'react'
import { Select } from "@chakra-ui/react"


function SelectComp({placeHolder,optionList,padding}) {
    return (
        <>
       <Select placeholder={placeHolder} padding={padding} type="date" >
     {  optionList.map((option,index)=> {
         return(<option id={index} >{option}</option>);
     }
     
     )}  
       </Select>
        </>
    )
}

export default SelectComp

