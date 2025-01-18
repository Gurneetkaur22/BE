Task 1 : Log Request Information to a File Using fs Module in Express.js

* Objective:
This project demonstrates how to implement middleware in an Express.js application to capture and log essential request details for every incoming request. The request information is written to a log file using Node.js's built-in fs module.

* Features:

Middleware Functionality:-

The application includes middleware to capture the following details for each request:

1. Timestamp: The current date and time when the request was made.

2. IP Address: The IP address of the client making the request.

3. URL: The requested URL path.

4. Protocol: The protocol used for the request (e.g., HTTP, HTTPS).

5. HTTP Method: The HTTP method used for the request (e.g., GET, POST).

6. Hostname: The hostname from which the request is made.

* File Logging

Captured request details are written to a log file named requests.log.

Each log entry is written as a JSON object.

New log entries are appended to the file using fs.appendFile().

Each entry is written on a new line for improved readability.
