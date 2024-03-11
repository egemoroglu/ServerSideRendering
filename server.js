const express = require('express');
const handlebars = require('express-handlebars').engine;
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const routes = require('./routes/handler');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use('/', routes);

app.engine('handlebars', handlebars({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/mainLayout')
}));
app.set('view engine', 'handlebars');


app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
})









