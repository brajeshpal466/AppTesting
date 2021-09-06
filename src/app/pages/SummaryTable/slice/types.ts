/* --- STATE --- */

import { summaryTableData } from 'types/summaryTable';

/* --- STATE --- */
export interface summaryTableState {
  loading: boolean;
  error?: summaryTableErrorType | null;
  summaryTableData: summaryTableData[];
}

export enum summaryTableErrorType {
  RESPONSE_ERROR = 1,
  TEST_NOT_FOUND = 2,
}
