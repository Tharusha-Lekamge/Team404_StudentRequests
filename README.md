# Student Request Management System
## Problem Statement
This system is a software tool to handle student requests, which simplifies the process of sending requests to and receiving responses from the academic staff within an institution. 
Using this system, students can send requests to academic staff on matters such as late add/drop requests, extend assignment submission deadlines, repeat exams as first attempt with the next batch etc. The requestee lecturers can accept, decline or request for additional details on the requests. They can also make comments on the requests made by the students.

## System Requirements
This SRMS has 3 types of users - students, staff and administrators. The system provides different functionalities and views for each of these user types. 
   1. Students
      1. Can submit a new request.
      2. View all requests submitted by self.
      3. Add additional details to the submitted requests.
      4. Filter requests by
         1. Approval status
         2. Type of request
   2. Staff
      1. Select each student request.
      2. View all details of the request.
      3. Approve or decline each request.
      4. Request for missing details.
      5. Make comments on the request - All comments regarding a certain request is shown as a single thread.
      6. Filter requests by
         1. Approval status
         2. Type of request
         3. Student index number
         4. Student name
   3. Admins
      1. Can add accounts
      2. Change account permissions

## Architecture
The SRMS is developed based on client-server architecture. The following models were used to 
Used Models -
#### 1. User model - 
   This model describes all the properties of a given user in the system. The user has properties such as, username (which is the unique identifier), password, index number (for students) and the user type (student/staff/admin). 
#### 2. Request model - 
A request is considered an object with properites such as request type, sender's details (index number, username), request information, 
submitted date and the approval status. A request is in 'pending' status by default once it is sent. After the requestee has viewed it and decided to approve or decline it, then the approval status of the request will change accordingly. 

Used Behaviour Driven development for development and testing the system.

## Features

1. Error Handler
2. 
