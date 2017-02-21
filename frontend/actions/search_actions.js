export const SEARCH_PROJECT = "SEARCH_PROJECT";
export const RECEIVE_SEARCH_PROJECT = "RECEIVE_SEARCH_PROJECT";
export const CATEGORY_SEARCH = "CATEGORY_SEARCH";
export const RECEIVE_CATEGORY_SEARCH = "RECEIVE_CATEGORY_SEARCH";
export const CLEAR_SEARCH_RESULT = "CLEAR_SEARCH_RESULT";

import * as APIUtil from '../util/search_api_util';

export const searchProject = (query) => (dispatch) => (
  APIUtil.fetchProjectSearch(query)
  .then(projects => dispatch(receiveSearchProject(projects)))
);

export const receiveSearchProject = (projects) => ({
  type: RECEIVE_SEARCH_PROJECT,
  projects
});

export const categorySearch = (category) => (dispatch) => (
  APIUtil.fetchCategorySearch(category)
  .then(projects => dispatch(receiveCategorySearch(projects)))
);

export const receiveCategorySearch = (projects) => ({
  type: RECEIVE_CATEGORY_SEARCH,
  projects
});

export const clearSearchResult = () => ({
    type: CLEAR_SEARCH_RESULT
});
