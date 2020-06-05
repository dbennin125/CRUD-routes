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
//get by ID
app.get('/dogs/:id', (req, res) =>{
  Dog
    .findById(req.params.id)
    .then(dog => res.send(dog));
    
});
//update by ID
app.patch('/dogs/:id', (req, res) =>{
  Dog
    .findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    .then(dog => res.send(dog));
      
});
//delete by ID
app.delete('/dogs/:id', (req, res) =>{
  Dog
    .findByIdAndDelete(req.params.id)
    .then(dog => res.send(dog));
      
});

module.exports = app;
