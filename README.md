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
The database design consists of the above 2 models.
Behaviour driven development was used for development and testing of the system. 
## Implementation
* Front end - React, HTML/CSS

* Back end - Node.js, MongoDB

## Features

1. Error Handler
2. 

---

## Running Locally

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or later
- [MongoDB Atlas](https://www.mongodb.com/atlas) account (or a local MongoDB instance)
- npm (bundled with Node.js)

---

### 1. Clone the repository

```bash
git clone https://github.com/Tharusha-Lekamge/Team404_StudentRequests.git
cd Team404_StudentRequests
```

---

### 2. Configure the server environment

Create `server/config.env` (this file is git-ignored — never commit it):

```
NODE_ENV=development
port=3000
DB_STRING=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority
JWT_SECRET=replace_with_a_long_random_string
JWT_EXPIRES=90d
```

| Variable     | Description                                           |
|--------------|-------------------------------------------------------|
| `NODE_ENV`   | `development` enables detailed error output + Morgan  |
| `port`       | Port the Express server listens on                    |
| `DB_STRING`  | Full MongoDB connection URI                           |
| `JWT_SECRET` | Secret used to sign and verify JWT tokens             |
| `JWT_EXPIRES`| Token lifetime (e.g. `90d`, `1h`)                    |

---

### 3. Install server dependencies

```bash
cd server
npm install
```

---

### 4. Start the server

```bash
npm start
```

The server will start with **nodemon** (auto-restarts on file changes).  
You should see:

```
DB connection set
listening on port 3000
```

---

### 5. Install client dependencies

Open a **new terminal** tab/window:

```bash
cd client
npm install
```

---

### 6. Start the React dev server

```bash
npm start
```

The app opens at **http://localhost:3000** by default (CRA will offer an alternate port if 3000 is taken by the server — use the URL printed in the terminal).

> **Note:** The client currently calls the API at `http://localhost:3000`. If the React dev server takes that port, the Express server must move to a different port (e.g. `3001`) and you must update the fetch URLs in the client accordingly. A `"proxy"` entry in `client/package.json` is the cleanest long-term fix — see [docs/.current-state.md](docs/.current-state.md) for details.

---

### 7. (Optional) Run the test suite

```bash
cd server
npm test
```

---

### 8. (Optional) Generate API documentation

```bash
cd server
npm run docs
```

HTML docs will be written to `server/docs/`.
