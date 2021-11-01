import { TestCasesData } from 'types/TestCases';

/* --- STATE --- */
export interface testCasesState {
  loading: boolean;
  error?: TestCasesErrorType | null;
  testCasesData: TestCasesData[];
}

export enum TestCasesErrorType {
  RESPONSE_ERROR = 1,
  TEST_NOT_FOUND = 2,
}
