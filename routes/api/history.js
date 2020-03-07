const express = require('express');
const router =express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const History = require('../../models/History');
const User = require('../../models/User');


router.post('/',passport.authenticate('jwt',{session:false}),(req, res) => {
  //  const { errors, isValid } = validateEducationInput(req.body);
  console.log(req.body.key);
var history={};
const type=req.body.type;
if(type==='article'){
   history={
      descrip:req.body.description,
      title:req.body.title,
      link:req.body.url,
      last_watch:new Date(),
      cType:req.body.type,
      img:req.body.urlToImage
    }
}
else if(type==='book'){
 history={
      title:req.body.title,
      link:req.body.key,
      last_watch:new Date(),
      cType:req.body.type,
      img:req.body.cover_i
    }

}
else{
 history={
      descrip:req.body.descrip,
      title:req.body.title,
      link:req.body.link,
      last_watch:new Date(),
      cType:req.body.type
    }

}
const hist2 = {
  user:req.user.id,
  history
}
console.log(hist2)
    // Check Validation
  History.findOne({user:req.user.id})
    .then(histe=>{
    if(histe){

      histe.history.unshift(history);
        histe.save().then(histe => res.json(histe));
          }else{
        new History(hist2).save().then(hist=>res.json(hist));
        }
      });
  });

  router.get('/',passport.authenticate('jwt',{session:false}),(req, res)=>{
    const errors={};
    History.findOne({user:req.user.id})
    .then(history=>{
      if(!history){
        errors.noprofile = 'there is no history ';
         res.status(404).json(errors);
      }
      res.json(history);
    })
    .catch(err=>res.send(err));
  });

module.exports = router;
