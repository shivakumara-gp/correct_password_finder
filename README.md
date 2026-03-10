# Correct Password Finder

## Overview

Correct Password Finder is a simple Node.js application that demonstrates how a server can verify a password and grant access to a protected page. It is a small educational project for understanding basic authentication logic and server routing.

## Features

* Password verification
* Restricted access to a secret page
* Simple backend using Node.js
* Static pages served from the public folder

## Project Structure

correct_password_finder
│
├── index.js
├── public
│   ├── index.html
│   └── secret.html

## Technologies Used

* Node.js
* Express.js
* HTML

## How to Run the Project

1. Clone the repository

git clone https://github.com/yourusername/correct_password_finder.git

2. Navigate to the project folder

cd correct_password_finder

3. Install dependencies

npm install

4. Start the server

node index.js

5. Open in browser

http://localhost:3000

## How It Works

1. The user enters a password on the login page.
2. The server checks if the password is correct.
3. If correct, the user is redirected to the secret page.
4. If incorrect, access is denied.

## Learning Purpose

This project helps beginners understand:

* Basic server setup in Node.js
* Handling user input
* Simple authentication flow
* Serving static files

## Author

Shiva Kumar
