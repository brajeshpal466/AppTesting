import React from 'react';
import {
  Box,
  Flex,
  Input,
  Img,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
//import {Icon }  from '@chakra-ui/icons'
//import {MdSearch} from 'react-icons/md'
import search from '../../../../styles/Assets/ic_search.svg';
function SearchBar() {
  return (
    <>
      <InputGroup width="50%" fontSize="14px">
        <InputLeftElement
          paddingRight="15px  "
          paddingBottom="4px"
          pointerEvents="none"
        >
          <Img width="13.5px" src={search}></Img>
        </InputLeftElement>
        <Input
          size="xs"
          outline="none"
          border="none"
          background="white3"
          borderRadius="2"
          height="35px"
          paddingLeft="25px"
          variant="unstyled"
          type=""
          placeholder="Search Keyword"
        ></Input>
      </InputGroup>
      {/* <InputGroup>
    <Input  ></Input>
    </InputGroup> */}
    </>
  );
}

export default SearchBar;
