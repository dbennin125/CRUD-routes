const express = require('express');
const app = express();
const Dog = require('./models/Dog')

app.use(express.json());

app.post('/dogs', (req, res) => {
  Dog
    .create(req.body)
    .then(dog => res.send(dog));

});

module.exports = app;
