# Activity Booking App API

A REST API for a basic activity booking app, built for the MeetX Backend Developer Internship assignment.

## Features
- User registration and login with JWT authentication
- List available activities (public endpoint)
- Book an activity (authenticated users only)
- View booked activities for the logged-in user
- Input validation using Joi
- Password hashing using bcrypt
- Clean folder structure (routes, controllers, models)

## Tech Stack
- Backend: Node.js, Express.js
- Database: MongoDB (Mongoose)
- Authentication: JWT
- Validation: Joi
- Password Hashing: bcrypt

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone <your-repo-link>
   cd activity-booking-app