const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/calculator.js');
});

app.listen(3001, () => {
  console.log('Example app listening on port 3000!');
});