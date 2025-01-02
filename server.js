const express = require('express');
const app = express();
const port = 6060;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/the_prophecies_begin', (req, res) => {
    res.send('The Prophecies Begin')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
