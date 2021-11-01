import { lazyLoad } from 'utils/loadable';

export const testCases = lazyLoad(
  () => import('./index'),
  module => module.TestCases,
);
