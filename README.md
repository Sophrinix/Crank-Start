# Crank Start

### Getting up and running locally

* Clone the repo

* cd into the directory

* run `npm install`

* run `bundle install`

* run `bundle exec rake db:setup`

* run `rails s`

* to watch for changes, run `webpack -w`


CrankStart is a crowd sourcing application inspired by KickStarter. It was build end-to-end in 2 weeks while I was at App Academy.

![Cover photo](/cover-shot.png)

CrankStart features all of the key functionality of KickStarter, but was built to fund small grassroots projects and community organizing initiatives. The UI and single-page architecture were built with React.js and Ruby on Rails. Data is stored in a PostGres database and AWS hosts site images.
[Take a look at the live version!][heroku]

[heroku]: http://www.crankstart.co/#/

## Features

### Authentication

- Allows faster login and signup with front-end authentication
- Ensures user security and protects sensitive user data with BCrypt password hashing and SecureRandom token generation


### Search

- Search field is animated to roll onto the navbar when magnifying glass icon is clicked
- PgSearch Gem allows for optimized fuzzy search on project names, keywords, and usernames


