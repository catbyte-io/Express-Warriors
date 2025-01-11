import { getBreed } from './getbreeds.js';

// Define application
const express = require('express');
const app = express();

// Configure app to use nunjucks for templating
const nunjucks = require('nunjucks');

nunjucks.configure('views', {
  autoescape: true,
  express: app
});


// Routes
app.get('/', (req, res) => {
  res.render('index.html');
});

app.get('/fireheart', async (req, res) => {
  const fireheartBreed = getBreed('Abyssinian');
  res.render('fireheart.html')
});

// Configure static files
app.use(express.static('public'));

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))

// Serve app on port
const port = 6060;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
