const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('user');
const key = require('../config/key');

const opts={};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = key.Skey;
module.exports = passport =>{
  passport.use(new JwtStrategy(opts,(jwt_payload,done)=>{
    //console.log(jwt_payload);
    User.findById(jwt_payload.id)
    .then(user =>{
      if(user){
        return done(null,user);

      }
      return done(null,false);
    })
 .catch((err) =>console.log(err));
  })
);
};
