let express = require('express');
let { addUser, findUser} = require('./db');  

let dbroutes = express.Router();
dbroutes.post('/addUser', addUser);
dbroutes.get('/findUser/:username', findUser); 
module.exports = dbroutes;
