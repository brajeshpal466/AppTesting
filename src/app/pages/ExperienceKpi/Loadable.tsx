import { lazyLoad } from 'utils/loadable';

export const ExperienceKpi = lazyLoad(
  () => import('./index'),
  module => module.ExperienceKpi,
);
