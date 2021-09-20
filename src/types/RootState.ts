import { summaryTableState } from '../app/pages/SummaryTable/slice/types';
import { testNotificationState } from '../app/pages/TestAnalytics/slice/types';
import { TestSessionState } from 'app/pages/TestSession/slice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  summaryTable?: summaryTableState;
  testNotification?: testNotificationState;
  testSession?: TestSessionState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
