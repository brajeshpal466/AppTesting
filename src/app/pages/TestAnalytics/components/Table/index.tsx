// @ts-nocheck
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import {
  Table as CustomTable,
  Thead,
  Tr,
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
    <Flex flexDirection="column" background="white">
      <CustomTable variant="simple" {...getTableProps()}>
        <Thead>
          {headerGroups.map(headerGroup => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
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
          className="pagination"
          boxShadow="1px 1px 3px #00000029"
          borderRadius="14"
          marginTop="10px"
          marginRight="5px"
          display="inline-block"
        >
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'< '}
          </button>{' '}
          <Text as="span" width="30px">
            <Input
              variant="flushed"
              size="xs"
              _focus={{ color: 'none' }}
              textAlign="right"
              fontSize="14px"
              borderBottom="1.5px solid"
              borderBottomColor="grey13"
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
              style={{ width: '60px' }}
            />
          </Text>{' '}
          <span>
            <span>of {pageOptions.length}</span>{' '}
          </span>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {' >'}
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
