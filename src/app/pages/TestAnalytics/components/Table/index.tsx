// @ts-nocheck
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import {
  Table as CustomTable,
  Thead,
  Tr,
  Img,
  Text,
  Box,
  Container,
  Td,
  Th,
  Tbody,
  Input,
  Flex,
} from '@chakra-ui/react';

// export function TestAnalytics() {
//   return <h1>

//   </h1>;
// }

import { useTable, usePagination } from 'react-table';

import makeData from './makeData';
import automationIcon from '../../../../../styles/Assets/Automation.svg';
import settingIcon from '../../../../../styles/Assets/Gif.png';

const AutomationIcon = () => {
  return (
    <Flex as="span" padding="0px">
      {' '}
      <Img
        width="22px"
        marginLeft="5px"
        height="22px"
        src={automationIcon}
        alt="debug"
      ></Img>
    </Flex>
  );
};
const SettingIcon = () => {
  return (
    <Flex as="span" padding="0px">
      {' '}
      <Img width="22px" height="22px" src={settingIcon} alt="settings"></Img>
    </Flex>
  );
};

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const inputRef = useRef();
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 2 },
    },
    usePagination,
  );

  // Render the UI for your table
  return (
    <Flex flexDirection="column" width="100%" backgroundColor="white">
      <CustomTable
        fontFamily="Montserrat"
        fontWeight="500"
        variant="simple"
        {...getTableProps()}
      >
        <Thead fontWeight="500" color="grey1">
          {headerGroups.map(headerGroup => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              <Th minWidth="0px" paddingLeft="0px" paddingRight="0px"></Th>
              <Th minWidth="0px" paddingLeft="0px" paddingRight="0px"></Th>
              {headerGroup.headers.map(column => (
                <Th
                  textTransform="capitalize"
                  color="grey1"
                  {...column.getHeaderProps()}
                >
                  {column.render('Header')}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody fontWeight="500" color="grey13" {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);

            return (
              <Tr _hover={{ background: 'grey14' }} {...row.getRowProps()}>
                {/*  <SettingIcon/> */}
                <Td minWidth="10px" paddingLeft="15px" paddingRight="0px">
                  {i == 4 && <SettingIcon></SettingIcon>}
                </Td>
                <Td minWidth="10px" paddingLeft="0px" paddingRight="0px">
                  <AutomationIcon></AutomationIcon>
                </Td>
                {row.cells.map((cell, index) => {
                  return (
                    <Td {...cell.getCellProps()}>
                      {' '}
                      {/* {index === 0 ?  : ''} */}
                      {cell.render('Cell')}
                      {/* </Flex>{' '} */}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </CustomTable>
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      <Flex
        justifyContent="flex-end"
        padding="10px 0px"
        marginRight="10px"
        color="grey13"
      >
        <Flex
          fontFamily="Montserrat"
          fontWeight="500"
          className="pagination"
          boxShadow="0px 3px 6px #00000029"
          borderRadius="13"
          marginTop="10px"
          marginRight="5px "
          color="grey2"
          padding="5px 10px"
          display="inline-block"
        >
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            <Box as="b" fontWeight="500" borderRadius="50%">
              {' '}
              &lt;{' '}
            </Box>{' '}
            &nbsp;
          </button>{' '}
          <Box as="span" color="black" paddingRight="2px" paddingBottom="3px">
            <Input
              variant="flushed"
              size="18px"
              width="25px"
              _focus={{ color: 'none' }}
              textAlign="right"
              fontSize="14px"
              borderBottom="1.5px solid"
              borderBottomColor="grey2"
              ref={inputRef}
              type="number"
              value={pageIndex + 1}
              onFocus={e => e.target.select()}
              onKeyUp={e => {
                if (e.key === 'Backspace') {
                  e.target.select();
                }
              }}
              onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
            />
          </Box>{' '}
          <Box textTransform="lowercase" as="span" color="black">
            <span>of {pageOptions.length}</span>{' '}
          </Box>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            &nbsp;
            <Box as="b" fontWeight="500" borderRadius="50%">
              {' '}
              {'  >'}
            </Box>
          </button>{' '}
        </Flex>
      </Flex>
    </Flex>
  );
}

function TestAnalytics() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Start On',
        accessor: 'startOn',
      },

      {
        Header: 'Id',
        accessor: 'id',
      },

      {
        Header: 'Project',
        accessor: 'project',
      },
      {
        Header: 'Build',
        accessor: 'build',
      },
      {
        Header: 'Script',
        accessor: 'script',
      },
      {
        Header: 'Device',
        accessor: 'device',
      },
      {
        Header: 'User',
        accessor: 'user',
      },
    ],
    [],
  );

  const data = React.useMemo(() => makeData(100000), []);

  return (
    <>
      <Table columns={columns} data={data} />
    </>
  );
}

export default TestAnalytics;
