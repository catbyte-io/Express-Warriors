import { getBreed, searchImagesByBreed, characters } from './calls.js';

// Define application
import express from 'express';
const app = express();

import path from 'path';
const __dirname = path.resolve();

// Configure app to use nunjucks for templating
import nunjucks from 'nunjucks';

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

// Routes
app.get('/', (req, res) => {
  res.render('index.html', 
    characters,
  );
});

app.get('/character:name', async (req, res) => {
  const characterBreed = getBreed(characters.breed);
  res.render('character.html')
});

// Configure static files
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'dist')));

// Serve app on port
const port = 6060;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
