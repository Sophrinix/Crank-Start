# Database Schema:

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
name            | string    | not null
street_address  | string    | not null
city            | string    | not null
state           | string    | not null
zip             | string    | not null


## projects
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
image_url   | string    | not null
description | text      | not null
funding_goal| integer   | not null
org_link    | string    | not null
creator_id  | integer   | not null, foreign key (references users), indexed

## rewards
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
project_id   | integer   | not null, foreign key (references users), indexed
receiver_id  | integer   | not null, foreign key (references projects), indexed
title       | string    | not null
body        | string    | not null

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
project_id  | integer   | not null, foreign key (references projects), indexed
body        | string    | not null


## contributions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
project_id  | integer   | not null, foreign key (references projects), indexed
backer_id   | integer   | not null, foreign key (references users), indexed
amount      | integer   | not null
message     | string    |
