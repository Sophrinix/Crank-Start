export const fetchProjectSearch = (query) => {
  return $.ajax({
    url: '/api/searches',
    method: 'GET',
    data: { query: query }
  });
};

export const fetchCategorySearch = (queryString, success, error) => {
  $.ajax({
    url: '/searches/category_search',
    method: 'GET',
    data: { category: queryString },
    success: success,
    error: error

  });
}
