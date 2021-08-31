import { TestAnalytics } from 'types/TestAnalytics';

/* --- STATE --- */
export interface TestAnalyticsState {
  loading: boolean;
  error?: TestAnalyticsErrorType | null;
  testData: TestAnalytics[];
}

export enum TestAnalyticsErrorType {
  RESPONSE_ERROR = 1,
  TEST_NOT_FOUND = 2,
}
