export const fetchProjects = (projects) => {
  return $.ajax({
    method: 'GET',
    url: 'api/projects',
    // data: projects
  });
};

export const fetchProject = (projectId) => {
  return $.ajax({
    method: 'GET',
    url: `api/projects/${projectId}`
  });
};

export const createComment = (comment) => {
  return $.ajax({
    method: 'POST',
    url: 'api/comments',
    data: comment
  });
};

export const createProject = (project) => {
  return $.ajax({
    method: 'POST',
    url: 'api/projects',
    data: project
  });
};
