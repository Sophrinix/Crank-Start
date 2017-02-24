export const categories = {
  1: 'Mallards',
  2: 'Pond Ducks',
  3: 'Senior Ducks',
  4: 'Duck Wellness',
  5: 'Community Ducks',
  6: 'Duck Advocacy',
  7: "'Other' Ducks"
}

export const fetchCategories = () => {
  return $.ajax({
    method: "GET",
    url: 'api/categories'
  });
}
