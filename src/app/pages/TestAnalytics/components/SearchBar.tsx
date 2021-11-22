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
        <InputLeftElement pointerEvents="none">
          <Img
            width="16px"
            marginRight="15px"
            marginBottom="8px"
            height="16px"
            src={search}
          ></Img>
        </InputLeftElement>
        <Input
          fontFamily="Montserrat"
          fontWeight="400px"
          style={{ color: '#797A84' }}
          fontSize="14px"
          size="xs"
          outline="none"
          border="none"
          background="white3"
          borderRadius="2"
          height="35px"
          paddingLeft="28px"
          variant="unstyled"
          type=""
          paddingBottom="2px"
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
