
### Component Hierarchy:

* App
  * NavBar
    * Search
  * FeaturedProjects
  * ProjectsIndex
  * ProjectDetailContainer
    * ProjectDetail
    * ProjectCommentIndex
      * ProjectComment
  * ProjectFormContainer
    * ProjectForm
  * SignUpContainer
    * SignUp

### Routes:


  | Path                           | Component                 |
  |--------------------------------|---------------------------|
  | /signup                        | UserFormContainer         |
  | /signin                        | AuthFormContainer         |
  | /home                          | HomeContainer             |
  | /search                        | SearchProject             |
  | /search-results                | SearchResultsContainer    |
  | /explore                       | ProjectsIndex             |
  | /projects/new                  | ProjectFormContainer      |
  | /projects/:projectId           | ProjectDetailContainer    |
  | /projects/:projectId/edit      | ProjectFormContainer      |
