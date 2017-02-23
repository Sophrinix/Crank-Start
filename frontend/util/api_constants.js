export const categories = {
  1: 'Special Needs',
  2: 'Career Preparation',
  3: 'Health and Wellness',
  4: 'Seniors',
  5: 'Community Centers',
  6: 'Housing Advocacy'
}

export const fetchCategories = () => {
  return $.ajax({
    method: "GET",
    url: 'api/categories'
  });
}
