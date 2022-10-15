### Studemt Request Management System
## Problem Statement
students send requests to academic staff on matters such as late add/drop requests, extend assignment submission deadlines, repeat exams as first attempt with the next batch etc. Lecturers can accept, decline or request for additional details on the requests. Lecturers can also make comments on the requests made by the students.

## System Requirements
1. Has three types of users
   1. Students
      1. Can submit a new request.
      2. View all requests submitted by the user.
      3. Add additional details to the submitted requests.
      4. Filter requests by
         1. Approval status
         2. Type of request
   2. Staff
      1. Select each student request.
      2. View all details of the request.
      3. Approve or decline each request.
      4. Request for missing details.
      5. Make comments on the request.
      6. Filter requests by
         1. Approval status
         2. Type of request
         3. Student index number
         4. Student name
   3. Admins
      1. Can add accounts
      2. Change account permissions
2. Has a comments system
   1. Show comments in thread view.

## Architecture

This system uses Client-Server architecture.
Used Models -
1. User model
2. Request model

Used Behaviour Driven development for development and testing the system.

## Features

1. Error Handler
2. 