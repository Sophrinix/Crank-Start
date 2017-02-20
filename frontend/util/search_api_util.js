export const fetchProjectSearch = (queryString, success, error) => {
  console.log('making search ajax request');
  $.ajax({
    url: '/api/searches',
    method: 'GET',
    data: { query: queryString }
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
