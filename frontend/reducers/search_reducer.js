import { RECEIVE_SEARCH_PROJECT, RECEIVE_CATEGORY_SEARCH, CLEAR_SEARCH_RESULT } from '../actions/search_actions';
import merge from 'lodash/merge';

const defaultState = {
  projects: {},
  category_projects: {}
};

const searchReducer = (state = defaultState, action) => {
  let newState;
  switch(action.type){
    case RECEIVE_SEARCH_PROJECT:
      return { projects: action.projects }
    case RECEIVE_CATEGORY_SEARCH:
      return {category_projects: action.projects };
    case CLEAR_SEARCH_RESULT:
      newState = merge({}, state, {});
      newState.projects = {};
      return newState;
    default:
      return state;
  }
};

export default searchReducer;
