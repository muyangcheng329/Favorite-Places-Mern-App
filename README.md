# PROJECT OVERVIEW

## Visit the website: https://web-mern-app.web.app/

## PLACE SHARING APPLICATION

### OVERVIEW
This Place Sharing Application is a full-stack web application that allows users to share and manage information about various places. It is built using React for the frontend, Node.js and Express for the backend, and MongoDB for the database. The application features secure user authentication, image uploads, and geolocation services.

### FEATURES
- **Place Management**: Users can create, update, view, and delete place listings with details such as titles, descriptions, addresses, and images.
- **User Authentication**: The application uses JWT for secure user authentication, providing features for signup and login.
- **Image Upload**: Users can upload images for each place, with validation to ensure correct file types.
- **Geolocation**: Integration with the Google Maps API allows the conversion of addresses into geographical coordinates, which can be displayed on a map.
- **Responsive Design**: The application is designed to be responsive, providing a seamless experience across desktop and mobile devices.

### FRONTEND (REACT)
#### UI Components
- **PlaceList & PlaceItem**: Display a list of places with options to view details, edit, or delete.
- **Forms**: Forms for creating and updating places, including image upload and address input.
- **Map Component**: Displays a map with a marker for the place's location.
- **Navigation**: A responsive navigation bar with links for different sections and authentication controls.

#### State Management
- Uses React's `useState`, `useEffect`, and context for managing state across the application.
- Custom hooks (`useHttpClient`, `useForm`) manage HTTP requests and form state.

#### Routing
- React Router is used for navigation, with routes for different pages such as home, place details, and user authentication.

### BACKEND (NODE.JS AND EXPRESS)
#### API Endpoints
- **Places**: Endpoints for creating, reading, updating, and deleting place data.
- **Users**: Endpoints for user registration and authentication.

#### Middleware
- **Authentication**: JWT-based middleware to protect routes.
- **File Upload**: `multer` is used for handling image uploads.

#### Database
- **MongoDB & Mongoose**: Schemas and models for managing data related to users and places.

#### Validation & Error Handling
- The application uses `express-validator` for input validation and custom error handling for API responses.

### TECHNOLOGIES USED
- **Frontend**: React, CSS, HTML, Google Maps API
- **Backend**: Node.js, Express, JWT, bcryptjs
- **Database**: MongoDB, Mongoose
- **Others**: multer for file uploads, express-validator for validation, dotenv for environment variables
