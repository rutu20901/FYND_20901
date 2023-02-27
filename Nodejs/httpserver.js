const express = require('express');
const app = express();
const dt = require('./ownModule.js');

app.get('/', (req, res) => {
  res.status(200).send("The date and time are: " + dt.getCurrentDate());;

});

app.listen(8800, () => {
  console.log('Server started on port 8800');
});