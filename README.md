# parcel_operation_management_system
The Parcel Operation Management System is a full-stack web application designed to manage parcel operations efficiently. It allows staff to create, update, delete, and view parcels, while customers can track their parcels using a unique Parcel ID.

This project demonstrates frontend-backend integration, REST API development, and cloud deployment using AWS.

Technologies Used

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

Features

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

How to Run the Project

Backend Setup

Navigate to backend folder:
cd backend

Install dependencies:
pip install flask
Run the server:
python app.py
Backend will run on:
http://127.0.0.1:5000


Frontend Setup

Frontend is deployed using Nginx on AWS EC2.
Access via:
http://54.154.185.222/


API Endpoints
Method         Endpoint       Description
GET            parcels        Get all parcels
GET            track          Track parcel
POST           add            Add new parcel
PUT            update         Update parcel status
DELETE         delete         Delete parcel

Testing
Unit tests implemented for API endpoints
Integration tests added
All tests successfully passed
Run tests:
python test_app.py

Project Structure
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


Key Improvements Made
Fixed API connection from localhost to deployed backend
Added try-catch error handling
Improved UI responsiveness
Deployed full system on AWS EC2


Future Enhancements
Add authentication (login system)
Improve UI with frameworks (React)
Add pagination and filters
