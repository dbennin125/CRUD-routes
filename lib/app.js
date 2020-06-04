const express = require('express');
const app = express();
const Dog = require('./models/Dog');

app.use(express.json());
//create a dog
app.post('/dogs', (req, res) => {
  Dog
    .create(req.body)
    .then(dog => res.send(dog));

});
//get all dogs
app.get('/dogs', (req, res) => {
  Dog
    .find()
    .then(dogs => res.send(dogs));
});


module.exports = app;
