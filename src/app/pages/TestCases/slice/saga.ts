import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { request } from 'utils/request';
import { testCasesActions as actions } from '.';
import { TestCasesData } from 'types/TestCases';
import { TestCasesErrorType } from './types';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
/**
 * Github repos request/response handler
 */
export function* getTestCasesData() {
  yield delay(500);
  const requestURL = `https://617eaea62ff7e600174bd8b7.mockapi.io/chart/api/testcases`;

  try {
    // Call our request helper (see 'utils/request')
    const testCasesData: TestCasesData[] = yield call(request, requestURL);
    if (testCasesData?.length > 0) {
      yield put(actions.testCasesDataLoaded(testCasesData));
    } else {
      yield put(actions.testCasesDataError(TestCasesErrorType.RESPONSE_ERROR));
    }
  } catch (err) {
    /*
    if (err.response?.status === 404) {
      yield put(actions.repoError(RepoErrorType.USER_NOT_FOUND));
    } else if (err.message === 'Failed to fetch') {
      yield put(actions.repoError(RepoErrorType.GITHUB_RATE_LIMIT));
    } else {
    */
    yield put(actions.testCasesDataError(TestCasesErrorType.RESPONSE_ERROR));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* testCasesSaga() {
  // Watches for loadRepos actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(actions.loadtestCasesData.type, getTestCasesData);
}
