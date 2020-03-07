const express = require('express');
const router =express.Router();
//const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const key =require('../../config/key')
const passport = require('passport');
//load inputvalidation
const validationRegisterInput=require('../../validator/register');
const validationLoginInput=require('../../validator/login');
//load user model
var User = require('../../models/User');
//@route GET api/user/test
//@desc test  user route
//@access private
router.get('/test',(req,res) => res.json({msg:"user works"})
);
//@route post api/user/test
//@desc register user
//@access public

router.post('/register',(req,res) => {

  var avatar='';
//validation
const {errors,isValid} =validationRegisterInput(req.body);
//check Validation
if(!isValid){
  return res.status(400).json(errors);
}
  User.findOne({email:req.body.email})
  .then((user) => {
    errors.email ='email already exists';
    if(user){
      return res.status(400).json(errors);
    }
    else {
      if(req.body.avatar===null){
      avatar = gravatar.url(req.body.email, {
        s:'200',//size
        r:'pg', //rating
        d:'mm' //Default
      });}else{
        avatar=req.body.avatar;
      }
      const newUser = new User({
        name:
        {
          fname:req.body.name
        },
        email:req.body.email,
        avatar,
        password:req.body.password,
        password2:req.body.password2
      });
      bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
          if(err) {
            console.log(err);
          }
          newUser.password=hash;
          newUser.save()
          .then(user => res.json(user))
          .catch(err=> console.log(err));
        });
      });
    }
  });

});

//@route GET api/user/login
//@desc login user /returning jwt token
//@access public

router.post('/login',(req,res)=>{

  //validation
  const {errors,isValid} =validationLoginInput(req.body);

  //check Validation
  if(!isValid){
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password=req.body.password;
  User.findOne({email})
  .then(user=>{
    //check User
    if(!user){
        errors.email ='User not found';
      return res.status(404).json(errors);
    }
    bcrypt.compare(password,user.password).then(isMatch =>{
      if(isMatch){
      //  res.json({msg:'success login'});
      //usermatch
      const payload = { id:user.id, name:user.name,avatar:user.avatar}
      //sign jsonwebtoken
      jwt.sign(payload,
        key.Skey,
        {expiresIn:3600},
        (err,token)=>{
          res.json({
            success:true,
            token:'Bearer '+token
          });
        });
      }
      else{
        errors.password='password incorrect';
        return res.status(400).json(errors);
      }
    });
  });
});
//@route GET api/user/login
//@desc return current user
//@access private
router.get('/current',passport.authenticate('jwt',{session:false}),(req,res)=>{
  res.json(
    {name:req.user.name,
    email:req.user.email}
  );
});

module.exports = router;
