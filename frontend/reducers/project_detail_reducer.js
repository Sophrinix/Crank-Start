import { merge } from 'lodash';

import { RECEIVE_PROJECT,
         RECEIVE_NEW_PROJECT,
         RECEIVE_ERRORS
          } from '../actions/project_actions';

const defaultProject = {
  title: '',
  blurb: '',
  about: '',
  created_at: '',
  duration: '',
  author_id: '',
  category_id: '',
  city: '',
  state: '',
  funding_goal: '',
  funding: 0,
  complete: false,
  img_url: '',
  errors: []
};

export default (state = defaultProject, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_PROJECT:
    case RECEIVE_NEW_PROJECT:
      return merge({}, action.project);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, errors);
    default:
      return state;
  }
};
