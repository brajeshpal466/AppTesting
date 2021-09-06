import { lazyLoad } from 'utils/loadable';

export const SummaryTable = lazyLoad(
  () => import('./index'),
  module => module.SummaryTable,
);
