import {CREATE_BACKING,
       RECEIVE_BACKING_ERRORS,
       RECEIVE_NEW_BACKING} from '../actions/backing_actions';
import merge from 'lodash/merge';

const BackingsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_NEW_BACKING:
      const newBacking = {[action.backing.id]: action.backing}
      return merge({}, state, newBacking);
    case RECEIVE_BACKING_ERRORS:
      const errors = action.errors;
      return merge({}, state, {errors});
    default:
      return state;
  }
};

export default BackingsReducer;
