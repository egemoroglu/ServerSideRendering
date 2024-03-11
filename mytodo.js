
const express = require('express');
const handlebars = require('express-handlebars').engine;
const {Client} = require('pg');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'handlebars');

app.engine('handlebars', handlebars({
    layoutsDir: __dirname + '/views',
}));

app.get('/', (req, res) => {
  res.render('index', {layout : 'index'})
})

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
})

const client = new Client({user: 'postgres', host: 'localhost', database: 'TODO', password: 'Gktrk06.', port: 5432});
client.connect().then(() => {console.log('Connected to database')}).catch((err) => {console.log('Error: ' + err)});

client.query('SELECT * FROM todo', function(err, result) {
  if (err) {
    console.log(err);
  }
  console.log(result.rows);
  client.end();
});

