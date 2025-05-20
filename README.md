# Attentive Backend

This is the backend server for the Attentive iOS app, built with Node.js, Express, and MongoDB.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/attentive
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

3. Make sure MongoDB is running on your system.

## Running the Server

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
  - Body: `{ "email": "user@example.com", "password": "password123", "name": "John Doe" }`

- `POST /api/auth/login` - Login user
  - Body: `{ "email": "user@example.com", "password": "password123" }`

### Tasks

All task endpoints require authentication. Include the JWT token in the Authorization header:
`Authorization: Bearer <your-token>`

- `GET /api/tasks` - Get all tasks for the authenticated user
- `POST /api/tasks` - Create a new task
  - Body: `{ "title": "Task title", "description": "Task description", "dueDate": "2024-03-20", "priority": "high" }`
- `PATCH /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

## Task Model

```javascript
{
  title: String,          // required
  description: String,    // optional
  dueDate: Date,         // optional
  priority: String,      // enum: ['low', 'medium', 'high']
  status: String,        // enum: ['pending', 'in-progress', 'completed']
  user: ObjectId,        // reference to User
  createdAt: Date,
  updatedAt: Date
}
``` 