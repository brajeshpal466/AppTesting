import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { request } from 'utils/request';
import { ExperienceKpiActions as actions } from '.';
import { ExperienceKpiData } from 'types/ExperienceKpi';
import { ExperienceKpiErrorType } from './types';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
/**
 * Github repos request/response handler
 */
export function* getExperienceKpiData() {
  yield delay(500);
  //  const requestURL = `${BASE_URL}/test-session`;
  const requestURL = `https://6182009384c2020017d89c1d.mockapi.io/expkpi`;

  try {
    // Call our request helper (see 'utils/request')
    const ExperienceKpiData: ExperienceKpiData[] = yield call(
      request,
      requestURL,
    );
    if (ExperienceKpiData?.length > 0) {
      yield put(actions.ExperienceKpiDataLoaded(ExperienceKpiData));
    } else {
      yield put(
        actions.ExperienceKpiDataError(ExperienceKpiErrorType.RESPONSE_ERROR),
      );
    }
  } catch (err) {
    /*
    if (err.response?.status === 404) {
      yield put(actions.repoError(RepoErrorType.USER_NOT_FOUND));
    } else if (err.message === 'Failed to fetch') {
      yield put(actions.repoError(RepoErrorType.GITHUB_RATE_LIMIT));
    } else {
    */
    yield put(
      actions.ExperienceKpiDataError(ExperienceKpiErrorType.RESPONSE_ERROR),
    );
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* ExperienceKpiSaga() {
  // Watches for loadRepos actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(actions.loadExperienceKpiData.type, getExperienceKpiData);
}
