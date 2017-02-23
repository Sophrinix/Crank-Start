import { values } from 'lodash';

export const selectProjects = ({ session, projects }) => {
  if (!session.currentUser) return [];
  const currentUserId = session.currentUser.id;
  const userProjects = projects.filter((project) => project.user.id === currentUserId);
  return values(userProjects);
};

export const selectCategories = ({ categories }) => values(categories)

export const selectRewards = ({ rewards }) => values(rewards)

export const asArray = ({ projects }) => Object.keys(projects).map(key => projects[key]);
