# parcel_operation_management_system
The Parcel Operation Management System is a full-stack web application designed to manage parcel operations efficiently. It allows staff to create, update, delete, and view parcels, while customers can track their parcels using a unique Parcel ID.

This project demonstrates frontend-backend integration, REST API development, and cloud deployment using AWS.

# Technologies Used

Frontend
HTML
CSS
JavaScript

Backend
Python (Flask)
REST APIs

Deployment
AWS EC2 (Ubuntu)
Nginx (for serving frontend)

Version Control
Git & GitHub

# Features

Staff Dashboard
Add new parcel
Update parcel status (In Transit, Out for Delivery, Delivered)
Delete parcel
Search parcel by ID
View total parcels and status summary

Parcel Management
View all parcels in table format
Displays:
Parcel ID
Parcel Name
Customer Name
Email
Address
Date
Status

Customer Tracking
Track parcel using Parcel ID
Displays current delivery status

Live Application
Frontend URL: http://54.154.185.222/index.html

# How to Run the Project

Backend Setup

Navigate to backend folder:
cd backend

Install dependencies:
pip install flask
Run the server:
python app.py
Backend will run on:
http://127.0.0.1:5000


# Frontend Setup

Frontend is deployed using Nginx on AWS EC2.
Access via:
http://54.154.185.222/


# API Endpoints
Method         Endpoint       Description
GET            parcels        Get all parcels
GET            track          Track parcel
POST           add            Add new parcel
PUT            update         Update parcel status
DELETE         delete         Delete parcel

# API Endpoints Summary

The system uses REST API endpoints to enable communication between the frontend and backend. Each endpoint corresponds to a specific operation on parcel data using standard HTTP methods.

- GET requests are used to retrieve data (view all parcels and track a specific parcel).
- POST is used to create a new parcel.
- PUT is used to update the status of an existing parcel.
- DELETE is used to remove a parcel from the system.

These endpoints ensure a structured and efficient way to perform CRUD operations (Create, Read, Update, Delete) and allow seamless integration between the user interface and the backend server.

# Testing
Unit tests implemented for API endpoints
Integration tests added
All tests successfully passed
Run tests:
python test_app.py

# Project Structure
parcel_operation_management_system/
│
├── backend/
│   ├── app.py
│   ├── test_app.py
│
├── frontend/
│   ├── index.html
│   ├── staff.html
│   ├── parcels.html
│   ├── customer.html
│   ├── staff.js
│   ├── parcels.js
│   ├── customer.js
│   ├── style.css
│
└── README.md

# Project Structure Explanation

The project is organized into two main parts: backend and frontend, following a clear separation of concerns.

# Backend ("backend/")

This folder contains the server-side logic of the application.

- app.py
  This is the main Flask application file. It defines all REST API endpoints such as adding, updating, deleting, and fetching parcel data. It handles client requests and communicates with the database.

- test_app.py
  This file is used for testing backend functionality to ensure that API endpoints are working correctly.

---

# Frontend ("frontend/")

This folder contains the user interface of the application built using HTML, CSS, and JavaScript.

- index.html
  The home page of the system. It provides navigation to the Staff Dashboard and Customer Tracking page.

- staff.html
  The main dashboard for staff. It allows performing CRUD operations such as adding, updating, deleting, and searching parcels, along with viewing parcel statistics.

- parcels.html
  Displays all parcel records in a tabular format by fetching data from the backend API.

- customer.html
  Allows users to track parcel status using a parcel ID.

- staff.js
  Handles all staff-related operations by sending API requests (add, update, delete, search) to the backend.

- parcels.js
  Fetches parcel data from the backend and dynamically displays it in the table.

- customer.js
  Handles parcel tracking functionality by calling the backend API and displaying results.

- style.css
  Contains styling for all frontend pages to ensure a consistent and user-friendly interface.

---

# README.md

Contains project documentation including setup instructions, features, and explanations.


# Overall Architecture

The project follows a client-server architecture:

- The frontend interacts with the user.
- The backend (Flask API) processes requests.
- Data is exchanged using JSON over HTTP.

# Commit References

The following additional resources were also referred to during development:

- Flask Official Documentation – https://flask.palletsprojects.com/
  
- W3Schools (HTML, CSS, JavaScript basics) – https://www.w3schools.com/
  
- JavaScript DOM Manipulation
  https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
  
- JavaScript Array Methods (forEach, loops)
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  
- REST API Concepts and Design
  https://restfulapi.net/
  
- Flask Routing and API Endpoints
  https://flask.palletsprojects.com/en/latest/quickstart/
  
- Deployment permission Confirmation
  https://chatgpt.com/share/69e61ea7-38b0-83eb-971c-cee88b7bae77

- UI updating 
  https://chatgpt.com/share/69e220c9-2c30-83eb-9a0c-223c09459ffd

- EC2 instance creation
  https://youtube.com/shorts/XkhQYCAKzfY?is=rDTBUMb4DoWTVRQd\

# Key Improvements Made
Fixed API connection from localhost to deployed backend
Added try-catch error handling
Improved UI responsiveness
Deployed full system on AWS EC2


# Future Enhancements
Add authentication (login system)
Improve UI with frameworks (React)
Add pagination and filters
