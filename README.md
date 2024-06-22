# JWT Authentication System

This repository contains a comprehensive implementation of an authentication system using JSON Web Tokens (JWT) in a Node.js application. It covers user registration, login, and protected routes, ensuring secure access to resources. The project is built with Express.js and MongoDB, demonstrating best practices for handling user authentication and authorization.

## Features

- User Registration: Create new user accounts with hashed passwords.
- User Login: Authenticate users and issue JWT tokens.
- Protected Routes: Secure endpoints that require a valid JWT token.
- Token Refresh: Implement token refresh functionality to keep users logged in.
- Logout: Invalidate JWT tokens upon user logout.
- Error Handling: Comprehensive error handling for authentication-related operations.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt for password hashing
- redis
- dotenv
- morgan
- http-errors
