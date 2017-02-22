import { values } from 'lodash';

export const selectProjects = ({ projects }) => (
  values(projects)
);

export const selectRewards = ({ rewards }) => (
  values(rewards)
);

export const asArray = ({ projects }) => Object.keys(projects).map(key => projects[key]);
