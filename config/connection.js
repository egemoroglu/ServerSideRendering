const {Client} = require('pg');

//Database connection
const client = new Client({
    user: 'postgres', 
    host: 'mytodo-database.co5qpleyensq.eu-north-1.rds.amazonaws.com', 
    database: 'TODO', 
    password: 'Gktrk06.', 
    port: 5432
  });
  client.connect().then(() => {
    console.log('Connected to database')})
    .catch((err) => {
      console.log('Error: ' + err)
    });

    module.exports = client;