import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { request } from 'utils/request';
import { testNotificationActions as actions } from '.';
import { testNotificationData } from 'types/testNotification';
import { testNotificationErrorType } from './types';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
/**
 * Github repos request/response handler
 */
export function* gettestNotificationData() {
  yield delay(500);
  const requestURL =
    'https://6125d0b42d4e0d0017b6c499.mockapi.io/api/data/devices/Notification';

  try {
    // Call our request helper (see 'utils/request')
    const testNotificationData: testNotificationData[] = yield call(
      request,
      requestURL,
    );
    if (testNotificationData?.length > 0) {
      yield put(actions.testNotificationDataLoaded(testNotificationData));
    } else {
      yield put(
        actions.testNotificationDataError(
          testNotificationErrorType.RESPONSE_ERROR,
        ),
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
      actions.testNotificationDataError(
        testNotificationErrorType.RESPONSE_ERROR,
      ),
    );
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* testNotificationSaga() {
  // Watches for loadRepos actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(
    actions.loadtestNotificationData.type,
    gettestNotificationData,
  );
}
