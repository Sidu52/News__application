## News Application with User Authentication
This is a web application that provides user authentication and displays news articles using the GNews API. Users can sign up, sign in, and view the latest news articles from various sources.

## Features
.User Registration: Users can create an account with a username, email, and password.
.User Authentication: Users can log in securely using their registered email and password.
.Home Page: Authenticated users can access the home page to view the latest news articles.
.News Feed: The application fetches and displays news articles from the GNews API.
.Logout: Users can log out to securely end their session.

## Technologies Used
.Frontend:
React: A JavaScript library for building user interfaces.
Backend:
Node.js: A JavaScript runtime for building the server.
Express.js: A web application framework for Node.js.
MongoDB: A NoSQL database for storing user data.
JSON Web Tokens (JWT): For user authentication and authorization.

## Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/news-app.git

## Navigate to the project directory:
bash
Copy code
cd news-app

## Install dependencies for both the frontend and backend:
npm install
cd ../server
npm install

## Create a .env file in the server directory and add the following:
env
Copy code
PORT=8000
MONGODB_URI=mongodb://localhost/newsdb
SECRET_KEY=your-secret-key

## Create a api.js in the client src directory and add the follwing
api.js
url   - https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=99&apikey=----apiKey----'
categoryUrl  - `https://gnews.io/api/v4/top-headlines?category=`
api   - GNewsAPI
## Usage
Register a new user account by clicking the "Sign Up" link on the login page.

Log in with your registered email and password.

Explore the home page to view the latest news articles.

Log out when you're done.
