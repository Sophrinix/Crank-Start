import * as APIUtil from '../util/project_api_util';

export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CREATE_PROJECT = "CREATE_PROJECT";
export const RECEIVE_NEW_PROJECT = 'RECEIVE_NEW_PROJECT';

export const fetchProjects = () => (dispatch) => (
  APIUtil.fetchProjects()
  .then(projects => dispatch(receiveProjects(projects)))
);

export const fetchProject = (projectId) => (dispatch) => (
  APIUtil.fetchProject(projectId)
  .then(project => dispatch(receiveProject(project)))
);

export const createProject = (project) => (dispatch) => (
  APIUtil.createProject(project)
  .then(project => dispatch(receiveProject(project)))
);

export const fetchUserProjects = (userId) => (dispatch) => (
  APIUtil.fetchUserProjects(userId)
  .then(projects => dispatch(receiveProjects(projects)))
)

export const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects
});

export const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveNewProject = project => ({
	type: RECEIVE_NEW_PROJECT,
	project
});
