// Load Environment Variables from the .env file
require('dotenv').config();

// Application Dependencies
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const pg = require('pg');

// Database Client
const Client = pg.Client;
const client = new Client(process.env.DATABASE_URL);
client.connect();

// Application Setup
const app = express();
const PORT = process.env.PORT;
app.use(morgan('dev'));
app.use(cors());
app.use(express.static('public'));

//API Routes
app.get('/api/pigs', async(req, res) => {
    try {
        const result = await client.query(`
            SELECT
                p.*,
                d.degree AS degree_of_evil
            FROM pigs p
            JOIN degree_of_evil d
            ON p.degree_of_evil_id = d.id
            ORDER BY degree_of_evil ASC
        `);

        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({
            error: err.message || err
        });
    }

});

// Start the server

app.listen(PORT, () => {
    console.log('server running on PORT', PORT);
});