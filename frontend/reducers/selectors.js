import { values } from 'lodash';

export const selectProjects = ({ projects }) => (
  values(projects)
);

export const asArray = ({ projects }) => Object.keys(projects).map(key => projects[key]);
