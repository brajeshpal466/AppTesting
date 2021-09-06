import React, { useEffect } from 'react';
import { Grid, Flex, Box, Text, GridItem } from '@chakra-ui/react';
import styled from 'styled-components/macro';
import {
  Table,
  TableCaption,
  Th,
  Tr,
  Thead,
  Td,
  Tbody,
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectsummaryTableData,
  selectLoading,
  selectError,
} from './slice/selectors';
import { summaryTableErrorType } from './slice/types';
import { useSummaryTableSlice } from './slice';
const tableHeader = ['Status', 'Time', 'Test Case', 'Details'];
export function SummaryTable() {
  const { actions } = useSummaryTableSlice();

  const summaryTableData = useSelector(selectsummaryTableData);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const useEffectOnMount = (effect: React.EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    // When initial state username is not null, submit the form to load repos
    dispatch(actions.loadsummaryTableData());
  });

  const onSubmitForm = (evt?: React.FormEvent<HTMLFormElement>) => {
    /* istanbul ignore next  */
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
    }
  };

  console.log(summaryTableData);
  return (
    <>
      <Table variant="simple" size="sm" width="100%">
        {/* <TableCaption >Test CaseSummary</TableCaption> */}
        <Thead>
          <Tr>
            {tableHeader.map(heading => (
              <Th>{heading}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {summaryTableData.map(item => (
            <Tr>
              <Td>{item.status}</Td>
              <Td>{item.time}</Td>
              <Td>{item.testcase}</Td>
              <Td>{item.details}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
}

export const repoErrorText = (error: summaryTableErrorType) => {
  switch (error) {
    case summaryTableErrorType.RESPONSE_ERROR:
      return 'There is no such user 😞';
    default:
      return 'An error has occurred!';
  }
};
