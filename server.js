const mongoose = require('mongoose');
const app = require('./lib/app.js');

mongoose.connect('mongodb://localhost:27017/notes', {
  useNewUrlParser : true,
  useUnifiedTopology: true   
});

app.listen(7890, () => {
  console.log('Started on 7890');
});
