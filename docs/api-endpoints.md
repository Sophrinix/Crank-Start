# API Endpoints


### Root

- `GET /` - hits web app home

## JSON API

### Session

- `POST /session`
- `DELETE /session`
- `GET /session/new`


### Users

- `POST /api/users`
- `PATCH /api/users`

### Projects

- `GET /api/projects`
  - `Projects index/search`
- `POST /api/projects`
- `GET /api/projects/:id`
- `PATCH /api/projects/:id`
- `DELETE /api/projects/:id`

### Backing

- `GET /api/projects/:id/backing`
- `POST /api/projects/:id/backing`
- `GET /api/projects/:id/backing/:id`
- `DELETE /api/projects/:id/backing`
- `GET /api/projects/:id/backing`

### Rewards
- `GET /api/projects/:id/rewards`
- `POST api/projects/:id/rewards`
