//@ts-nocheck
import React, { useEffect, useState } from 'react';
import {
  Grid,
  Flex,
  Box,
  Text,
  GridItem,
  Table,
  TableCaption,
  Th,
  Tr,
  Thead,
  Td,
  Tbody,
} from '@chakra-ui/react';
import styled from 'styled-components/macro';

import { useSelector, useDispatch } from 'react-redux';
import {
  selectsummaryTableData,
  selectLoading,
  selectError,
} from './slice/selectors';
import { summaryTableErrorType } from './slice/types';
import { useSummaryTableSlice } from './slice';

import StatusInfoComp from 'app/components/Subheader';
import SummaryTableComp from 'app/components/SummaryTableComp';
const tableHeader = ['Status', 'Time', 'Test Case', 'Details'];
const summaryTableData = [
  {
    status: 'Running',
    time: '2014-12-26T06:55:34.315Z',
    testcase: '7A97Kd8|nT',
    details: 'fA7i>_jt:+',
    id: '1',
  },
  {
    status: 'Running',
    time: '2036-08-09T11:28:21.844Z',
    testcase: "9P|VC'Y_kd",
    details: 'o:6a`jM:"#',
    id: '2',
  },
  {
    status: 'Running',
    time: '2021-03-05T12:08:44.320Z',
    testcase: 'dTRuuHLzHX',
    details: 'gLYDCU"_>)',
    id: '3',
  },
  {
    status: 'Sheduled',
    time: '2011-12-12T22:44:38.309Z',
    testcase: "1(k&'w-1O[",
    details: '|Nz%J90/}*',
    id: '4',
  },
  {
    status: 'Sheduled',
    time: '2074-07-04T16:50:59.651Z',
    testcase: 'PAacc-+jy$',
    details: 'uWR^C8J)3F',
    id: '5',
  },
  {
    status: 'Sheduled',
    time: '2089-07-30T08:09:31.458Z',
    testcase: 't7#%A.rdi!',
    details: '|"ja#]`ezD',
    id: '6',
  },
  {
    status: '1Queued',
    time: '1996-04-06T15:06:55.373Z',
    testcase: "?@hI2b'F$E",
    details: '4MykZO]5mP',
    id: '7',
  },
  {
    status: '1Queued',
    time: '2028-09-02T20:39:42.207Z',
    testcase: '^|]9isLB3C',
    details: '%U9B.)^Z',
    id: '8',
  },
];
export function SummaryTable() {
  const { actions } = useSummaryTableSlice();

  //const summaryTableData = useSelector(selectsummaryTableData);
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
  let running: number = 0;
  let sheduled: number = 0;
  let queued: number = 0;

  console.log(summaryTableData);

  summaryTableData.map(item => {
    if (item.status === 'Running') {
      running = running + 1;
    }
    if (item.status === 'Sheduled') {
      sheduled = sheduled + 1;
    }
    if (item.status === 'Queued') {
      queued = queued + 1;
    }
  });
  const infoStatusData = {
    running,
    queued,
    sheduled,
  };
  console.log(infoStatusData);
  const tabroute = ['Test Analytics', 'Test Session Id- 145'];

  return (
    <>
      {/* {tabroute && (
        <StatusInfoComp
          infoStatusData={infoStatusData}
          tabroute={tabroute}
        ></StatusInfoComp>
      )} */}

      <SummaryTableComp
        tableHeader={tableHeader}
        summaryTableData={summaryTableData}
      ></SummaryTableComp>
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
