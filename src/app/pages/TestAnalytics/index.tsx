import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectTestAnalyticsData,
  selectLoading,
  selectError,
} from './slice/selectors';
import { TestAnalyticsErrorType } from './slice/types';
import { useTestAnalyticsSlice } from './slice';

export function TestAnalytics() {
  const { actions } = useTestAnalyticsSlice();

  const testAnalyticsData = useSelector(selectTestAnalyticsData);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const onChangeUsername = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.loadTestAnalyticsData());
  };

  const useEffectOnMount = (effect: React.EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    // When initial state username is not null, submit the form to load repos
    dispatch(actions.loadTestAnalyticsData());
  });

  const onSubmitForm = (evt?: React.FormEvent<HTMLFormElement>) => {
    /* istanbul ignore next  */
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
    }
  };

  return (
    <>
      {testAnalyticsData?.length > 0 ? (
        <ul>
          {testAnalyticsData.map(repo => (
            <li key={repo.testId}>{repo.project}</li>
          ))}
        </ul>
      ) : error ? (
        <p>{repoErrorText(error)}</p>
      ) : null}
    </>
  );
}

export const repoErrorText = (error: TestAnalyticsErrorType) => {
  switch (error) {
    case TestAnalyticsErrorType.RESPONSE_ERROR:
      return 'There is no such user 😞';
    default:
      return 'An error has occurred!';
  }
};
