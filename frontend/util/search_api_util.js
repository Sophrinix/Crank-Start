export const fetchProjectSearch = (query) => {
  return $.ajax({
    url: '/api/searches',
    method: 'GET',
    data: { query: query }
  });
};

export const fetchCategorySearch = (query) => {
  debugger
  return $.ajax({
    url: '/api/searches/category_search',
    method: 'GET',
    data: { category: query },
  });
}
