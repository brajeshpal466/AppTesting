/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const TestAnalytics = lazyLoad(
  () => import('./index'),
  module => module.TestAnalytics,
);
