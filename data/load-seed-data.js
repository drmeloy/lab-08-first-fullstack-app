require('dotenv').config();
const pg = require('pg');
const Client = pg.Client;
// import seed data:
const pigs = require('./pig-data.js');

run();

async function run() {
    const client = new Client(process.env.DATABASE_URL);

    try {
        await client.connect();
    
        // "Promise all" does a parallel execution of async tasks
        await Promise.all(
            // map every item in the array data
            pigs.map(pig => {

                // Use a "parameterized query" to insert the data,
                // Don't forget to "return" the client.query promise!
                return client.query(`
                    INSERT INTO pigs (name, year, is-evil, has_tusks, image_url, description)
                    VALUES ($1, $2, $3, $4, $5, $6);
                `,
                [pig.name, pig.year, pig.isEvil, pig.hasTusks, pig.imageURL, pig.description]);
                
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
