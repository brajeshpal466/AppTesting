import React from 'react'
import { Select } from "@chakra-ui/react"
 const optionList = [
     "7 Days",
     "30 Days",
     "90 Days",
 ]

function SelectComp({placeHolder}) {
    return (
        <>
         <Select placeholder={placeHolder} variant="filled" size="md"   border="1px solid grey" outline="none" height="26px">
     { optionList && optionList.map((option,index)=> {
         return(<option id={index} >{option}</option>);
     }
     
     )}  
       </Select>
        </>
    )
}

export default SelectComp