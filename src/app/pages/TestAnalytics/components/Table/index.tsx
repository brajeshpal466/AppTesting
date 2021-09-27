//@ts-nocheck
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import {
  Table as CustomTable,
  Thead,
  Tr,
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
    <>
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
      <Flex className="pagination" justifyContent="flex-end">
        <Flex>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'<  '}
          </button>{' '}
          <span>
            {' '}
            <Input
              isFullWidth="false"
              size="xs"
              variant="flushed"
              _focus={{ color: 'none' }}
              borderBottom="1px solid"
              borderBottomColor="black"
              width="20px"
              type="number"
              value={pageIndex + 1}
              onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: '100px' }}
            />
          </span>{' '}
          <span>
            {' '}
            <span>of {pageOptions.length}</span>{' '}
          </span>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {'  >'}
          </button>{' '}
          {/* <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '} */}
          {/* <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value  ))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select> */}
        </Flex>
      </Flex>
    </>
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
