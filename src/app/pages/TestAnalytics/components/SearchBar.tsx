import React from 'react';
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
//import {Icon }  from '@chakra-ui/icons'
//import {MdSearch} from 'react-icons/md'
// import { search}  from '../Assets/ic_search'
function SearchBar() {
  return (
    <>
      <InputGroup>
        <InputLeftElement padding="5px" pointerEvents="none"></InputLeftElement>
        <Input
          size="xs"
          outline="none"
          border="1px solid grey"
          borderRadius="3px"
          padding="5px"
          paddingLeft="20px"
          variant="unstyled"
          type=""
          placeholder=" Search Keyword"
        ></Input>
      </InputGroup>
      {/* <InputGroup>
    <Input  ></Input>
    </InputGroup> */}
    </>
  );
}

export default SearchBar;
