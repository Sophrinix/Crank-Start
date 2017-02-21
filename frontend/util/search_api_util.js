export const fetchProjectSearch = (query) => {
  return $.ajax({
    url: '/api/searches',
    method: 'GET',
    data: { query: query }
  });
};

export const fetchCategorySearch = (query) => {
  return $.ajax({
    url: '/searches/category_search',
    method: 'GET',
    data: { category: query },
  });
}
