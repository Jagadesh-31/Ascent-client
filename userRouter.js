let express = require('express');
let { addUser, findUser, updateUser, deleteUser } = require('./db');  

let dbroutes = express.Router();
dbroutes.post('/addUser', addUser);
dbroutes.get('/findUser/:id', findUser); 
dbroutes.put('/updateUser/:id', updateUser); 
dbroutes.delete('/deleteUser/:id', deleteUser); 

module.exports = dbroutes;
