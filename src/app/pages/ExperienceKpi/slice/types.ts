/* --- STATE --- */

import { ExperienceKpiData } from 'types/ExperienceKpi';

/* --- STATE --- */
export interface ExperienceKpiState {
  loading: boolean;
  error?: ExperienceKpiErrorType | null;
  ExperienceKpiData: ExperienceKpiData[];
}

export enum ExperienceKpiErrorType {
  RESPONSE_ERROR = 1,
  TEST_NOT_FOUND = 2,
}
