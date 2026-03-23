# Server Setup Notes - Dan Warren

## Starting the Server
- Copy config.env into the backend root folder
- Run `npm install` to install dependencies
- Run `node server.js` to start the server
- Server runs on http://localhost:4000

## Environment Variables
- config.env contains DATABASE, DB_PASSWORD, and PORT
- Never commit config.env to GitHub
- DB_PASSWORD is used to authenticate with MongoDB Atlas

## What I Observed
- server.js is the entry point for the backend
- The backend connects to MongoDB Atlas using mongoose
- Confirmed working by visiting http://localhost:4000
- DB connection successful message confirms MongoDB is connected