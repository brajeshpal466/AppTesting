import React from 'react'
import { Select } from "@chakra-ui/react"


function SelectComp({placeHolder,optionList,padding}) {
    return (
        <>
   <Select size="md" variant="filled" >
  <option value="option1">7 Days </option>
  <option value="option2">30 Days</option>
  <option value="option3">3 Months</option>
</Select>
        </>
    )
}

export default SelectComp