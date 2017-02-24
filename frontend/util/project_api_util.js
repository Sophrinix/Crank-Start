export const fetchProjects = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/projects'
  });
};

export const fetchProject = (projectId) => {
  return $.ajax({
    method: 'GET',
    url: `api/projects/${projectId}`
  });
};



export const createProject = (project) => {
  return $.ajax({
    method: 'POST',
    url: 'api/projects',
    data: project,
    processData: false,
    contentType: false
  });
};

export const fetchUserProjects = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `users/projects/{userId}`
  });
}
