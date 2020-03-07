const express = require('express');
 const mongoose = require('mongoose');
 const bodyParser = require('body-parser');
 const passport =require('passport');
 const user = require('./routes/api/user');
  const company = require('./routes/api/company');
   const register = require('./routes/api/register');
    const profile = require('./routes/api/profile');
    const history=require('./routes/api/history');
    var cors = require('cors')
const app = express();

var scope = ['r_basicprofile', 'r_fullprofile', 'r_emailaddress', 'r_network', 'r_contactinfo', 'rw_nus', 'rw_groups', 'w_messages'];
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors({
    origin: 'http://127.0.0.1:5005',
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.options('*', cors())

app.all('', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    //Auth Each API Request created by user.
    next();
});
//db config
 var db = require('./config/key').mongoURI;
  // connect to MongoDB
  mongoose.
  connect('mongodb://localhost:27017/LibDev',{ useNewUrlParser: true })
  .then(()=> console.log('mongodb connected'))
  .catch(err => console.log(err));

//app.get('/',(req,res)=>res.send('hello'));
//passport  middleware
app.use(passport.initialize());
//passport config
require('./config/passport')(passport);
//use routes

app.use('/api/user',user);
app.use('/api/company',company);
app.use('/api/register',register);
app.use('/api/profile',profile);
app.use('/api/history',history);

const port = process.env.PORT || 5008;

app.listen(port,()=>console.log(`server running on port ${port}`));
