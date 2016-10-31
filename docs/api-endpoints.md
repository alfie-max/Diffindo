# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Bills
- `GET /api/bills`
  - `POST /api/bills`
  - `GET /api/bills/:id`
  - `PATCH /api/bills/:id`
  - `DELETE /api/bills/:id`

### Comments
- `GET /api/bills/comments`
- `POST /api/bills/comments`
- `PATCH /api/bills/:billId/comments/:commentId`
- `DELETE /api/bills/:billId/comments/:commentId`

### Friends
- Friends can not be deleted. A GET is dispatched when creating/patching a bill
- `GET /api/friends`
- Friends can be added from the dashboard and from bill create/patch (bonus)
- `POST /api/bills/comments`


## BONUS

### Categories
- `GET /api/bills/categories`
