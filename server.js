// Load Environment Variables from the .env file
require('dotenv').config();

// Application Dependencies
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const pg = require('pg');

// Database Client
const Client = pg.Client;
const client = new Client(process.env.DATABSE_URL);
client.connect();
// (create and connect using DATABASE_URL)


// Application Setup
const app = express();
// (add middleware utils: logging, cors, static files from public)
// app.use(...)


// API Routes

// http method and path...


// Start the server
// (use PORT from .env!)
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log('server running on PORT', PORT);
});