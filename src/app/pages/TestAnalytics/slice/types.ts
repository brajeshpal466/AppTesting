import { testNotificationData } from 'types/testNotification';

/* --- STATE --- */
export interface testNotificationState {
  loading: boolean;
  error?: testNotificationErrorType | null;
  testNotificationData: testNotificationData[];
}

export enum testNotificationErrorType {
  RESPONSE_ERROR = 1,
  TEST_NOT_FOUND = 2,
}
