/* --- STATE --- */

import { TestSessionData } from 'types/TestSession';

/* --- STATE --- */
export interface TestSessionState {
  loading: boolean;
  error?: TestSessionErrorType | null;
  testSessionData: TestSessionData[];
}

export enum TestSessionErrorType {
  RESPONSE_ERROR = 1,
  TEST_NOT_FOUND = 2,
}
