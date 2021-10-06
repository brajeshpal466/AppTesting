import React from 'react';
import { Select } from '@chakra-ui/react';
const optionList = ['Last 7 Days', '30 Days', '90 Days'];
const None = () => {
  return <></>;
};

function SelectComp({ placeHolder }) {
  return (
    <>
      <Select
        icon={<None />}
        fontSize="14px"
        borderRadius="2"
        width="50%"
        marginLeft="7px"
        placeholder={placeHolder}
        background="white3"
        variant="filled"
        size="md"
        color="grey7"
        border="1px solid grey"
        outline="none"
        height="35px"
      >
        {optionList &&
          optionList.map((option, index) => {
            return <option>{option}</option>;
          })}
      </Select>
    </>
  );
}

export default SelectComp;
