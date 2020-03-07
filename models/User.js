const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
var User;

//craete Schema

;
const UserSchema = new Schema({
  name:{
    fname:
    {
        type:String,
        required:true,
        match: [/^[a-zA-Z]+$/, 'is invalid'],
    },
    mname:
    {
      type:String,

      match: [/^[a-zA-Z]+$/, 'is invalid'],

    },
    lname:
    {
      type:String,

      match: [/^[a-zA-Z]+$/, 'is invalid'],
    }

  },
  email:{
    type:String,
    required:true,
    match: [/\S+@\S+\.\S+/, 'is invalid'],

  },
  email_verified:Boolean,
  avatar:{
    type:String,
  },
  date:{
    type:Date,
    default:Date.now
  },
  password:{
    type:String,
    required:true
  },
  last_ip:String,
  last_login:Date,
  logins_count:Number,
  phone_number:Number,
  phone_varified:Boolean,
  //the user's profile was last update/modify
  udpated_at:Date,
  blocked:Boolean,

});
module.exports = User = mongoose.model('user',UserSchema);
