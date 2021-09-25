import React from 'react';
import { Select } from '@chakra-ui/react';

function SelectComp({ placeHolder, optionList, padding }) {
  return (
    <>
      <Select
        placeholder={placeHolder}
        variant=""
        size="md"
        border="1px solid "
        outline="none"
        height="26px"
        bg="white"
      >
        {optionList &&
          optionList.map((option, index) => {
            return <option id={index}>{option}</option>;
          })}
      </Select>
    </>
  );
}

export default SelectComp;
