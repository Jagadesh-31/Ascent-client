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

mongoose.connect( "mongodb+srv://gamerdevil033:NHcS3W1Gt1AelcZe@cluster0.p5pnd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"l).then(() => {
  console.log("connected to mongodb");
  app.listen(port, () => {
    console.log('server is listening on http://localhost:' + port);
  });
}).catch((err) => {
  console.log('error connecting to mongodb:' + err);
});
