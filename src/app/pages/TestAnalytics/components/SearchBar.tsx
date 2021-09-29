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
import search from '../../../../styles/Assets/ic_search.svg';
function SearchBar() {
  return (
    <>
      <InputGroup>
        <InputLeftElement paddingBottom="6px" pointerEvents="none">
          <img src={search} width="13.5px"></img>
        </InputLeftElement>
        <Input
          size="xs"
          outline="none"
          border="none"
          background="white3"
          borderRadius="3px"
          height="35px"
          paddingLeft="20px"
          variant="unstyled"
          type=""
          color="grey7"
          placeholder="    Search Keyword"
        ></Input>
      </InputGroup>
      {/* <InputGroup>
    <Input  ></Input>
    </InputGroup> */}
    </>
  );
}

export default SearchBar;
