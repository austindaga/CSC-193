'use strict';

const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/math/circle/:r', function(req, res) {
  const r = Number(req.params['r']);


  res.type('text');
  res.send(`Hello ${first} ${last}`);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT);
