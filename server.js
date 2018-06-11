const express = require('express');
const app = express();
const path = require('path');
const ToDo = require('./model/database.js')
const userController = require('./controller/controller.js')
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, 'client')))
app.post('/hello', userController.createItem)
app.get('/hello', userController.getList)
app.delete('/hello', userController.deleteItem)
app.listen(3002, console.log('server is listening'));