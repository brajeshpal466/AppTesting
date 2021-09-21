import React from 'react';
import { Select } from '@chakra-ui/react';

function SelectComp({ placeHolder, optionList, padding }) {
  return (
    <>
      <Select
        placeholder={placeHolder}
        variant="filled"
        size="md"
        border="1px solid grey"
        outline="none"
        height="26px"
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
