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
  res.render('base.html');
});

app.get('/the_prophecies_begin', (req, res) => {
    res.send('The Prophecies Begin')
});

// Configure static files
app.use(express.static('public'));

// Serve app on port
const port = 6060;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
