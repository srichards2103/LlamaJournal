# Journaling Platform

## Project Description

This is a full-stack journaling platform that allows users to create, store, and interact with their journal entries. The application features a React frontend, a Node.js backend, and integrates with an AI assistant powered by LLAMA for enhanced journaling experiences.

## Features

- User authentication (signup, login, logout)
- Create and view journal entries
- AI-assisted journaling with LLAMA integration
- Responsive design using Tailwind CSS and DaisyUI

## Tech Stack

### Frontend

- React
- React Router
- Axios for API calls
- Tailwind CSS with DaisyUI for styling

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT) for authentication
- bcryptjs for password hashing

### AI Integration

- LLAMA AI model

## Project Structure

- `client`: React frontend
- `server`: Node.js backend

## Setup and Installation

1. Clone the repository
2. Install dependencies:
   ```
   cd journaling-platform
   npm install
   cd client
   npm install
   cd ../server
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the `server` directory
   - Add the following variables:
     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     PORT=3000
     ```

## Running the Application

1. Start the backend server:
   ```
   cd server
   npm run dev
   ```
2. Start the frontend development server:
   ```
   cd client
   npm start
   ```
3. Open your browser and navigate to `http://localhost:3001`

## API Endpoints

- POST `/api/auth/signup`: User registration
- POST `/api/auth/login`: User login
- GET `/api/auth/user`: Get user information (protected route)
- POST `/api/journal`: Create a new journal entry (protected route)
- GET `/api/journal`: Get all journal entries for the logged-in user (protected route)
- POST `/api/llama/interact`: Interact with the LLAMA AI assistant (protected route)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License.
