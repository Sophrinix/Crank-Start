#Crank Starter


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
  - [ ] Community Tab
  - [ ] Recommended For You


__Design Documents:__
  * [WireFrames](https://github.com/jamesevers/punch_starter/tree/master/docs/wireframes)
  * [React Components](https://github.com/jamesevers/punch_starter/tree/master/docs/component-hierarchy.md)
  * [Sample State](https://github.com/jamesevers/punch_starter/tree/master/docs/sample-state.md)
  * [Database Schema](https://github.com/jamesevers/punch_starter/tree/master/docs/schema.md)
  * [API Endpoints](https://github.com/jamesevers/punch_starter/tree/master/docs/api-endpoints.md)


  __Implementation Timeline__

  ### Phase 1: Back-end configuration and front-end user authentication (2 days)
**Objective:** Create a functioning rails application that serves and stores data
* The header will have the website's name and icon, sign up, and sign in
buttons.
* Website name and icon should link back to the root view.
* Clicking sign up or sign in buttons will display sign in form or redirect to root once signed in.

### Phase 2: Home Page and Project Index (2 days)

**Objective:** Set up styled project index on home page
* Root view should feature a carousel of featured projects
* Each project should display the project's name, tagline, and image
* Clicking on a city will show the available list of restaurants.
* Project index has functioning search feature.

### Phase 3: Create Project (2 days)

**Objective:** Once logged in, users have the ability to create a project
* Project form will include title, project description, funding duration, and funding goal
* Once created, a project will be visible in the project index and have its own display page

### Phase 4: Project Details Page (2 days)

**Objective:** Display view of individual projects
* Details will include all information about the project
* Details will render a project component
* Details page will have Reservation form.
* Details page has option to favorite.


### Phase 5: Contributions (2 day)

**Objective:** Users can add a monetary or skills-based contribution to projects
* If monetary, the contribution will be added to the project's funding status bar
* If skills-based, the contribution will be added to a list below the funding status bar

### Phase 6: - Payment and Commenting (1.5 day)

**Objective:** Users are able to securely add their credit card information to the app and comment on projects
