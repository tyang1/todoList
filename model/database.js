const mongoose = require('mongoose');

mongoose.connect('mongodb://tyang1:tyang1@ds123129.mlab.com:23129/todolist');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we are connected successfully!")
});
//db.once === mongoose.connection.once

const doSchema = mongoose.Schema({
    username: {type: String},
    password: String,
    todo: String,
    createdAt: {type: Date, default: Date.now()}
})

const ToDo = mongoose.model('ToDo', doSchema);

module.exports = ToDo;

