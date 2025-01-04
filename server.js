const express = require('express');
const app = express();
const port = 6060;

const nunjucks = require('nunjucks');

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.get('/', (req, res) => {
  res.render('base.html');
});

app.get('/the_prophecies_begin', (req, res) => {
    res.send('The Prophecies Begin')
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
