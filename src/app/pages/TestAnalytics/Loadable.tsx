/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const testNotification = lazyLoad(
  () => import('./index'),
  module => module.TestNotification,
);
