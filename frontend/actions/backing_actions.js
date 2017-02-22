import * as APIUtil from '../util/backing_api_util';
export const CREATE_BACKING = "CREATE_BACKING";
export const RECEIVE_BACKING_ERRORS = "RECEIVE_BACKING_ERRORS";
export const RECEIVE_NEW_BACKING = "RECEIVE_NEW_BACKING";

export const createBacking = (backing) => (dispatch) => (
  APIUtil.createBacking(backing)
  .then(backing => dispatch(receiveNewBacking(backing)))
);

export const receiveBackingErrors = (errors) => ({
  type: RECEIVE_BACKING_ERRORS,
  errors
});

export const receiveNewBacking = (backing) => ({
  type: RECEIVE_NEW_BACKING,
  backing
});
