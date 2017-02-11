#Punch Starter


__Heroku Link:__

__MVP Statement:__
  CrankStarter is a crowd funding application inspired by KickStarter with a specific focus on community center and non-profit organization projects. By February 25th, the project will feature the following functioning components:

  - [ ] Account login, creation, and guest registration
  - [ ] Hosting on Heroku
  - [ ] Projects & Campaigns:
    - [ ] Palatable styling
    - [ ] Status of viewed project is displayed
    - [ ] Seamless functionality
  - [ ] Campaign-Backing
    - [ ] Users can contribute to or withdraw funds from a campaign
    - [ ] Funds indicator is updated in real time
    - [ ] User can navigate between About, FAQ, and News tabs
  - [ ] Search Bar Navigation
    - [ ] Projects are populated in real-time
    - [ ] Include database seeded projects for demo purposes
  - Categories/Explore Feature
    - [ ] Projects are grouped by category and can be sorted according by date added, number of backers, etc.

  Bonus Features:
  -[ ] Community Tab
  -[ ] Recommended For You


  __WireFrames__

  Follow [this](Wireframes) link to see the wireframes

  __React Components__

  * App
    * NavBar
      * Search
    * FeaturedProjects
    * CampaignsIndex
    * CategoriesIndex
    * CampaignDetail
      * Campaign Status
      * CampaignCommentIndex
        * CampaignComment
    * CampaignForm

  Routes:
    PATH  COMPONENT
    /sign-up AuthFormContainer
    /sign-in AuthFormContainer
    / App
    /projects/projectId ProjectContainer
    Projects/category CategoryContainer
    /search "SearchCampaign"
    Home/search-results SearchResultsContainer
    /new-project NewProjectContainer



  __Sample State__

  ```javascript
  
  ```

  __DB Schema__

  __API Endpoints__

  Implementation Timeline
