import { TestAnalyticsData } from 'types/TestAnalytics';

/* --- STATE --- */
export interface TestAnalyticsState {
  loading: boolean;
  error?: TestAnalyticsErrorType | null;
  testAnalyticsData: TestAnalyticsData[];
}

export enum TestAnalyticsErrorType {
  RESPONSE_ERROR = 1,
  TEST_NOT_FOUND = 2,
}
