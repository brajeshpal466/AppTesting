import * as React from 'react';
import { Helmet } from 'react-helmet-async';
//import styled from 'styled-components';
// import {
//   Table as TableC,
//   Thead as THead,
//   Tbody as TBody,
//   Tfoot as TFoot,
//   Tr,
//   Th,
//   Td,
// } from '@chakra-ui/react';
// Import React Table
import makeData from './makeData';
// import {
//   useTable,
//   useGroupBy,
//   useFilters,
//   useSortBy,
//   useExpanded,
//   usePagination,
// } from 'react-table';

// const Styles = styled.div`
//   padding: 1rem;

//   TableC {
//     border-spacing: 0;
//     border: 1px solid black;

//     Tr {
//       :last-child {
//         Td {
//           border-bottom: 0;
//         }
//       }
//     }

//     Th,
//     Td {
//       margin: 0;
//       padding: 0.5rem;
//       border-bottom: 1px solid black;
//       border-right: 1px solid black;

//       :last-child {
//         border-right: 0;
//       }
//     }
//   }

//   .pagination {
//     padding: 0.5rem;
//   }
// `;

// function Table({ columns, data }) {
//   // Use The state and functions returned from useTable to build your UI
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     prepareRow,
//     page, // Instead of using 'rows', we'll use page,
//     // which has only The rows for The active page

//     // The rest of These Things are super handy, too ;)
//     canPreviousPage,
//     canNextPage,
//     pageOptions,
//     pageCount,
//     gotoPage,
//     nextPage,
//     previousPage,
//     setPageSize,
//     state: { pageIndex, pageSize },
//   } = useTable(
//     {
//       columns,
//       data,
//       initialState: { pageIndex: 2 },
//     },
//     usePagination,
//   );

//   // Render The UI for your TableC
//   return (
//     <>
//       <pre>
//         <code>
//           {JSON.stringify(
//             {
//               pageIndex,
//               pageSize,
//               pageCount,
//               canNextPage,
//               canPreviousPage,
//             },
//             null,
//             2,
//           )}
//         </code>
//       </pre>
//       <TableC {...getTableProps()}>
//         <THead>
//           {headerGroups.map(headerGroup => (
//             <Tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map(column => (
//                 <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
//               ))}
//             </Tr>
//           ))}
//         </THead>
//         <TBody {...getTableBodyProps()}>
//           {page.map((row, i) => {
//             prepareRow(row);
//             return (
//               <Tr {...row.getRowProps()}>
//                 {row.cells.map(cell => {
//                   return (
//                     <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
//                   );
//                 })}
//               </Tr>
//             );
//           })}
//         </TBody>
//       </TableC>
//       {/*
//         Pagination can be built however you'd like.
//         This is just a very basic UI implementation:
//       */}
//       <div className="pagination">
//         <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
//           {'<<'}
//         </button>{' '}
//         <button onClick={() => previousPage()} disabled={!canPreviousPage}>
//           {'<'}
//         </button>{' '}
//         <button onClick={() => nextPage()} disabled={!canNextPage}>
//           {'>'}
//         </button>{' '}
//         <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
//           {'>>'}
//         </button>{' '}
//         <span>
//           Page{' '}
//           <strong>
//             {pageIndex + 1} of {pageOptions.length}
//           </strong>{' '}
//         </span>
//         <span>
//           | Go to page:{' '}
//           <input
//             type="number"
//             defaultValue={pageIndex + 1}
//             onChange={e => {
//               const page = e.target.value ? Number(e.target.value) - 1 : 0;
//               gotoPage(page);
//             }}
//             style={{ width: '100px' }}
//           />
//         </span>{' '}
//         <select
//           value={pageSize}
//           onChange={e => {
//             setPageSize(Number(e.target.value));
//           }}
//         >
//           {[10, 20, 30, 40, 50].map(pageSize => (
//             <option key={pageSize} value={pageSize}>
//               Show {pageSize}
//             </option>
//           ))}
//         </select>
//       </div>
//     </>
//   );
// }

export function HomePage() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
          },
          {
            Header: 'Visits',
            accessor: 'visits',
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
          },
        ],
      },
    ],
    [],
  );

  const data = React.useMemo(() => makeData(100000), []);

  return <div></div>;
}

// export default App;
/*
      <Table>
        <Thead>
          <Tr>
            <Th>Status</Th>
            <Th>Started On</Th>
            <Th isNumeric>ID</Th>
            <Th>Project</Th>
            <Th>Build</Th>
            <Th>Script</Th>
            <Th>Device</Th>
            <Th>User</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Completed</Td>
            <Td>16 Jul 2020 05:48</Td>
            <Td isNumeric>251</Td>
            <Td>Demo Project</Td>
            <Td>v1.0.7</Td>
            <Td>Jenkins-22047</Td>
            <Td>Galaxy Pro</Td>
            <Td>User Name</Td>
          </Tr>
          <Tr>
            <Td>Completed</Td>
            <Td>16 Jul 2020 05:48</Td>
            <Td isNumeric>251</Td>
            <Td>Demo Project</Td>
            <Td>v1.0.7</Td>
            <Td>Jenkins-22047</Td>
            <Td>Galaxy Pro</Td>
            <Td>User Name</Td>
          </Tr>
          <Tr>
            <Td>Completed</Td>
            <Td>16 Jul 2020 05:48</Td>
            <Td isNumeric>251</Td>
            <Td>Demo Project</Td>
            <Td>v1.0.7</Td>
            <Td>Jenkins-22047</Td>
            <Td>Galaxy Pro</Td>
            <Td>User Name</Td>
          </Tr>
          <Tr>
            <Td>Completed</Td>
            <Td>16 Jul 2020 05:48</Td>
            <Td isNumeric>251</Td>
            <Td>Demo Project</Td>
            <Td>v1.0.7</Td>
            <Td>Jenkins-22047</Td>
            <Td>Galaxy Pro</Td>
            <Td>User Name</Td>
          </Tr>
          <Tr>
            <Td>Completed</Td>
            <Td>16 Jul 2020 05:48</Td>
            <Td isNumeric>251</Td>
            <Td>Demo Project</Td>
            <Td>v1.0.7</Td>
            <Td>Jenkins-22047</Td>
            <Td>Galaxy Pro</Td>
            <Td>User Name</Td>
          </Tr>
          <Tr>
            <Td>Completed</Td>
            <Td>16 Jul 2020 05:48</Td>
            <Td isNumeric>251</Td>
            <Td>Demo Project</Td>
            <Td>v1.0.7</Td>
            <Td>Jenkins-22047</Td>
            <Td>Galaxy Pro</Td>
            <Td>User Name</Td>
          </Tr>
          <Tr>
            <Td>Completed</Td>
            <Td>16 Jul 2020 05:48</Td>
            <Td isNumeric>251</Td>
            <Td>Demo Project</Td>
            <Td>v1.0.7</Td>
            <Td>Jenkins-22047</Td>
            <Td>Galaxy Pro</Td>
            <Td>User Name</Td>
          </Tr>
        </Tbody>
        <Tfoot></Tfoot>
      </Table>
      */
