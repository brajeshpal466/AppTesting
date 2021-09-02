import { lazyLoad } from 'utils/loadable';

export const TestSession = lazyLoad(
  () => import('./index'),
  module => module.TestSession,
);
