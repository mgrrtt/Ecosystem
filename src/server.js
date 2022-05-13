const express = require('express');

const data = require('./stubs/data');

const app = express();

const port = process.env.PORT || 3001;
// package.json - "proxy": "http://localhost:3001"

app.get('/api/apps', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.json(data);
});

app.listen(port, () => console.log(`working on ${port}`));
// cd src; nodemon server.js
