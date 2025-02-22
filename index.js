let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let dbroutes = require('./userRouter');
require('dotenv').config();

let app = express();

app.use(cors());
app.use(express.json());
app.use('/user', dbroutes);

let port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
res.send("hello");})

mongoose.connect(process.env.url).then(() => {
  console.log("connected to mongodb");
  app.listen(port, () => {
    console.log('server is listening on http://localhost:' + port);
  });
}).catch((err) => {
  console.log('error connecting to mongodb:' + err);
});
