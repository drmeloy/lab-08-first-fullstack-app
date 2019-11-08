require('dotenv').config();
const pg = require('pg');
const Client = pg.Client;
// import seed data:
const pigs = require('./pig-data.js');

const degOfEvilArr = [...new Set(pigs.map(pig => pig.degreeOfEvil))];

run();

async function run() {
    const client = new Client(process.env.DATABASE_URL);

    try {
        await client.connect();

        const pigsDegrees = await Promise.all (
            degOfEvilArr.map(async degree => {
                const result = await client.query(`
                    INSERT INTO degree_of_evil (degree)
                    VALUES ($1)
                    RETURNING *;
                `,
                [degree]);

                return result.rows[0];
            })
        );
    
        // "Promise all" does a parallel execution of async tasks
        await Promise.all(
            // map every item in the array data
            pigs.map(pig => {
                const deg = pigsDegrees.find(row => row.degree === pigs.degreeOfEvil);
                // Use a "parameterized query" to insert the data,
                // Don't forget to "return" the client.query promise!
                return client.query(`
                    INSERT INTO pigs (name, year, is_evil, has_tusks, walks_on_num_legs, degree_of_evil_id, image, description)
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8);
                `,
                [pig.name, pig.year, pig.isEvil, pig.hasTusks, pig.walksOnNumLegs, deg.id, pig.image, pig.description]);
                
            })
        );

        console.log('seed data load complete');
    }
    catch (err) {
        console.log(err);
    }
    finally {
        client.end();
    }
    
}
