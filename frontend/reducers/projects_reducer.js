import {RECEIVE_PROJECTS,
       RECEIVE_PROJECT,
       RECEIVE_ERRORS} from '../actions/project_actions';
import merge from 'lodash/merge';

const ProjectsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_PROJECTS:
      return action.projects
    case RECEIVE_PROJECT:
      const newProject = {[action.project.id]: action.project}
      return merge({}, state, newProject);
    default:
      return state;
  }
};

export default ProjectsReducer;
