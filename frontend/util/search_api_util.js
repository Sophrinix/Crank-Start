export const fetchProjectSearch = (queryString, success, error) => {
  $.ajax({
    url: '/api/searches',
    method: 'GET',
    data: { query: queryString },
    success: success,
    error: error
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
