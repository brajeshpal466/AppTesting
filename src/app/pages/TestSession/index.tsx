import React, { useEffect } from 'react';
import { Grid, Flex, Box, Text, GridItem } from '@chakra-ui/react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectTestSessionData,
  selectLoading,
  selectError,
} from './slice/selectors';
import { TestSessionErrorType } from './slice/types';
import { useTestSessionSlice } from './slice';

export function TestSession() {
  const { actions } = useTestSessionSlice();

  const testSessionData = useSelector(selectTestSessionData);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const useEffectOnMount = (effect: React.EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    // When initial state username is not null, submit the form to load repos
    dispatch(actions.loadTestSessionData());
  });

  const onSubmitForm = (evt?: React.FormEvent<HTMLFormElement>) => {
    /* istanbul ignore next  */
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
    }
  };

  console.log(testSessionData);
  return (
    <>
      {testSessionData[0] && (
        <Grid
          boxShadow=".5px .5px 2px "
          padding="10px"
          alignContent="flex-start"
          templateColumns="repeat(6, 1fr)"
          gridRowGap="1"
          gap={3}
        >
          <GridItem w="100%">
            <Text as="span" display="block">
              Session Id
            </Text>
            <Text as="b" display="block">
              {testSessionData[0].testSessionId}
            </Text>
          </GridItem>
          <GridItem w="100%">
            <Text as="span" display="block">
              Date & Time
            </Text>
            <Text as="b" display="block">
              {testSessionData[0].timeStamp}
            </Text>
          </GridItem>
          <GridItem w="100%">
            <Text as="span" display="block">
              Project
            </Text>
            <Text as="b" display="block">
              {testSessionData[0].project}
            </Text>
          </GridItem>
          <GridItem w="100%">
            <Text as="span" display="block">
              Build
            </Text>
            <Text as="b" display="block">
              {testSessionData[0].build}
            </Text>
          </GridItem>
          <GridItem w="100%">
            <Text as="span" display="block">
              Script
            </Text>
            <Text as="b" display="block">
              {testSessionData[0].script}
            </Text>
          </GridItem>
          <GridItem w="100%">
            <Text as="span" display="block"></Text>
            <Text as="b" display="block"></Text>
          </GridItem>
          <GridItem w="100%">
            <Text as="span" display="block">
              Script
            </Text>
            <Text as="b" display="block">
              {testSessionData[0].script}
            </Text>
          </GridItem>
          <GridItem w="100%">
            <Text as="span" display="block">
              OS
            </Text>
            <Text as="b" display="block">
              {testSessionData[0].os}
            </Text>
          </GridItem>
          <GridItem w="100%">
            <Text as="span" display="block">
              Location
            </Text>
            <Text as="b" display="block">
              {testSessionData[0].location}
            </Text>
          </GridItem>
          <GridItem w="100%">
            <Text as="span" display="block">
              Network
            </Text>
            <Text as="b" display="block">
              {testSessionData[0].network}
            </Text>
          </GridItem>
        </Grid>
      )}
    </>
  );
}

export const repoErrorText = (error: TestSessionErrorType) => {
  switch (error) {
    case TestSessionErrorType.RESPONSE_ERROR:
      return 'There is no such user 😞';
    default:
      return 'An error has occurred!';
  }
};
