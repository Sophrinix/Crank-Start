import { merge } from 'lodash';

import { RECEIVE_PROJECT, RECEIVE_NEW_PROJECT } from '../actions/project_actions';

const defaultProject = {
  title: '',
  blurb: '',
  about: '',
  created_at: '',
  duration: '',
  author_id: '',
  city: '',
  state: '',
  funding_goal: '',
  funding: 0,
  complete: false

};
export default (state = defaultProject, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_PROJECT:
    case RECEIVE_NEW_PROJECT:
      return merge({}, action.project);
    default:
      return state;
  }
};
