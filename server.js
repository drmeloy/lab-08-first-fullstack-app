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
app.use(express.json());

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

app.post('/api/pigs', async(req, res) => {
    const pig = req.body;

    try {
        const result = await client.query(`
            INSERT INTO pigs (name, year, is_evil, has_tusks, walks_on_num_legs, degree_of_evil_id, image, description)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING *;
        `,
        [pig.name, pig.year, pig.isEvil, pig.hasTusks, pig.walksOnNumLegs, pig.degreeOfEvilId, pig.image, pig.description]
        );

        res.json(result.rows[0]);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: err.message || err
        });
    }
});

app.get('/api/degrees', async (req, res) => {
    try {
        const result = await client.query(`
            SELECT *
            FROM degree_of_evil
            ORDER BY degree ASC;
        `);
        
        res.json(result.rows);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: err.message || err
        });
    }
});

app.get('/api/pigs/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const result = await client.query(`
            SELECT
            p.*,
            d.degree AS degree_of_evil
            FROM pigs p
            JOIN degree_of_evil d
            ON p.degree_of_evil_id = d.id
            WHERE p.id === $1
        `,
        [id]);

        const pig = result.rows[0];
        if (!pig) {
            res.status(404).json({
                error: `Pig id ${id} does not exist`
            });
        }
        else {
            res.status(200).json(result);
            res.json(result.rows[0]);
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: err.message || err
        });
    }
});

// Start the server

app.listen(PORT, () => {
    console.log('server running on PORT', PORT);
});