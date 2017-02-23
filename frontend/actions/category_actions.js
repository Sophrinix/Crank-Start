import * as APIUtil from '../util/api_constants';

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";

export const fetchCategories = () => (dispatch) => (
  APIUtil.fetchCategories()
  .then(categories => dispatch(receiveCategories(categories)))
);

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
});
