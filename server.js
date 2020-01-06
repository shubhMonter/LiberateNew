const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const routes  = require('./routes');
//body-parser middleware
app.use(bodyParser.json());

//db config
const db = require('./config/keys').mongoURI;

//connect to mongodb
mongoose.connect(db).then(()=> console.log('MongoDB is Connected'))
         .catch(e=> console.log(e));

//demo api
app.get('/demo',routes.hello);

//api list

const port = process.env.PORT || 4000;

app.listen(port, ()=> console.log(`server started on Port ${port}`));
