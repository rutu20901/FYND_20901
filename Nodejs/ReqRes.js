const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.status(200).send("Hello everyone!!");;
});

app.listen(8800, () => {
  console.log('Server started on port 8800');
});