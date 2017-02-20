export const SEARCH_PROJECT = "SEARCH_PROJECT";
export const RECEIVE_SEARCH_PROJECT = "RECEIVE_SEARCH_PROJECT";
export const CATEGORY_SEARCH = "CATEGORY_SEARCH";
export const RECEIVE_CATEGORY_SEARCH = "RECEIVE_CATEGORY_SEARCH";
export const CLEAR_SEARCH_RESULT = "CLEAR_SEARCH_RESULT";

export const searchProejct = (queryString) => ({
  type: SEARCH_PROJECT,
  queryString
});

export const receiveSearchProject = (projects) => ({
  type: RECEIVE_SEARCH_PROJECT,
  projects
});

export const categorySearch = (category) => ({
  type: CATEGORY_SEARCH,
  category
});

export const receiveCategorySearch = (projects) => ({
  type: RECEIVE_CATEGORY_SEARCH,
  projects
});

export const clearSearchResult = () => ({
    type: CLEAR_SEARCH_RESULT
});
