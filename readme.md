# Parking Management System (PMS)

This project is a Parking Management System (PMS) built with NestJS and React. It provides a complete solution for managing parking spaces, vehicle types, and other related functionalities.
 
### Live Site: https://easypms.netlify.app/

## Running Locally

### Prerequisites

- Docker (for running PostgreSQL)
- Node.js (for running the API and frontend)

### Setting Up the PostgreSQL Database

If you have Docker installed, you can start the PostgreSQL database using Docker Compose:

```bash
docker-compose up -d
```

If you prefer not to use Docker, configure your local PostgreSQL database by modifying the .env.local file located in the api directory.

### Running the API
Navigate to the api directory:
```bash
cd api
```
Install the required dependencies:

```bash
npm install 
```
Start the API in development mode:

```bash
npm run start:dev
```
The API will be available at http://localhost:4000.

### Running the Frontend
Navigate to the web directory:
```bash
cd web
```
Install the required dependencies:

```bash
npm install
```
Start the frontend in development mode:
```bash
npm run dev
```
The frontend will be available at http://localhost:3000.
### API Documentation
You can access the Swagger API documentation at:
http://localhost:4000/api-docs#/Parking/ParkingController_findAll

### Checking in Production
API Documentation: https://determined-wonder-production.up.railway.app/api-docs
Live Site: https://easypms.netlify.app/

