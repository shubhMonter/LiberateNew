const express = require('express');
const router =express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
//load validation file
const validationProfileInput=require('../../validator/profile');
const  validationJobProfileInput=require('../../validator/job');
const  validationIntelProfileInput=require('../../validator/profile');
const  validationPersonProfileInput=require('../../validator/profile');
const validateExperienceInput = require('../../validator/experience');
const validateEducationInput = require('../../validator/education');
//load profile models
const Profile = require('../../models/Profile');
const User = require('../../models/User');


//@route get api/profile/test
//@desc test profile route
//@access public
router.get('/test',(req,res) => res.json({msg:"profile works"})
);
//@route get api/profile
//@desc get current user profile
//@access private
router.get('/',passport.authenticate('jwt',{session:false}),(req,res)=>{
  const errors={};
  Profile.findOne({user:req.user.id})
  .populate('user',['name','avatar'])
  .then(profile=>{
    if(!profile){
      errors.noprofile='there is no profile for this user'
      return res.status(404).json(errors);
    }
    res.json(profile);
  })
  .catch(err=>res.status(404).json(err));
});
//@route post api/profile/all
//@desc get all profile
//@access public
router.get('/all',(req,res)=>{
  const errors={};
  User.find()
  .populate('user',['name','avatar'])
  .then(profiles=>{
    if(!profiles){
      errors.noprofile = 'there is no profile ';
       res.status(404).json(errors);
    }
    res.json(profiles);
  })
  .catch(err=>res.status(404).json(err));
});

//@route post api/profile/handle/:handle
//@desc get profile by handle
//@access public
router.get('/handle/:handle',(req,res)=>{
  const errors={};
  Profile.findOne({handle:req.params.handle})
  .populate('user',['name','avatar'])
  .then(profile=>{
    if(!profile){
      errors.noprofile = 'there is no profile for this user';
       res.status(404).json(errors);
    }
    res.json(profile);
  })
  .catch(err=>res.status(404).json(err));
});
//@route post api/profile/user/:user_id
//@desc get profile by user
//@access public
router.get('/user/:user_id',(req,res)=>{
  const errors={};
  console.log({user:req.params.user_id});
  Profile.findOne({user:req.params.user_id})
  .populate('user',['name','avatar'])
  .then(profile=>{
    if(!profile){
      errors.noprofile = 'there is no profile for this user';
       res.status(404).json(errors);
    }
    res.json(profile);
  })
  .catch(err=>res.status(404).json(err));
});


//@route post api/profile
//@desc create or edit user profile
//@access private
router.post('/',passport.authenticate('jwt',{session:false}),(req,res)=>{




const profileFields={};
  profileFields.user=req.user.id;
if(req.body.form==='1'){
    const {errors,isValid}= validationProfileInput(req.body);
      //check Validation
      if(!isValid){
      return res.status(400).json(errors);
      }}
      else if(req.body.form==='2'){
        const {errors,isValid}= validationJobProfileInput(req.body);
          //check Validation
          if(!isValid){
          return res.status(400).json(errors);
          }
      }
  if(req.body.handle)profileFields.handle=req.body.handle;
  if(req.body.mobile)profileFields.mobile=req.body.mobile;
  if(req.body.gender)profileFields.gender=req.body.gender;
  if(req.body.dob)profileFields.dob=req.body.dob;
  if(req.body.company)profileFields.company=req.body.company;
  if(req.body.bio)profileFields.bio=req.body.bio;
   profileFields.address={};
  if(req.body.country)profileFields.address.country=req.body.country;
  if(req.body.sector)profileFields.sector=req.body.sector;
  if(req.body.category)profileFields.category=req.body.category;
  if(req.body.domain)profileFields.domain=req.body.domain;
  if(req.body.job_role)profileFields.job_role=req.body.job_role;
  if(req.body.skill)profileFields.skill=req.body.skill;



//var languages=req.body.languages.toString();
//profileFields.languages={};
//if(typeof req.body.languages!=='undefined'){
//profileFields.languages=languages.split(',');
//}
//var hobbies=req.body.hobbies.toString();
//profileFields.hobbies={};
//if(typeof req.body.hobbies!=='undefined'){
//profileFields.hobbies=hobbies.split(',');
//}
//if object in profileSchema that need to initialise
//other wise it will display not found
// eg. const skill={};
//use it again like if(req.body.stage)profileFields.skill.stage=req.body.stage;

Profile.findOne({user:req.user.id})
.then(profile=>{
  if(profile){
    Profile.findOneAndUpdate({user:req.user.id},
      {$set:profileFields},
      {new:true}
    ).then(profile=>res.json(profile));
  }else{
    //create
    //check if handle is exists
    Profile.findOne({handle:profileFields.handle})
    .then(profile=>{
      if(profile){
        errors.handle = 'that handle already exist'
        res.status(400).json(errors);
      }
      //save profile
      new Profile(profileFields).save().then(profile=>res.status(200));
    });
  }
});
});
router.post('/updateprofile',passport.authenticate('jwt',{session:false}),(req,res)=>{
  //const {errors,isValid} =validationProfileInput(req.body);
  //check Validation
  //if(!isValid){
//  return res.status(400).json(errors);
//  }
const profileFields={};
profileFields.user=req.user.id;
if(req.body.sector)profileFields.sector=req.body.sector;
if(req.body.category)profileFields.category=req.body.category;
if(req.body.domain)profileFields.domain=req.body.domain;
if(req.body.job_role)profileFields.job_role=req.body.job_role;
if(req.body.skill)profileFields.skill=req.body.skill;
if(req.body.intel_type)profileFields.intel_type=req.body.intel_type;
if(req.body.extrovert)profileFields.extrovert=req.body.extrovert;
if(req.body.agreeable)profileFields.agreeable=req.body.agreeable;
if(req.body.conscientious)profileFields.conscientious=req.body.conscientious;
if(req.body.neurotic)profileFields.neurotic=req.body.neurotic;
if(req.body.open)profileFields.open=req.body.open;
if(req.body.problem_sol)profileFields.problem_sol=req.body.problem_sol;
if(req.body.com_skill)profileFields.com_skill=req.body.com_skill;
if(req.body.moral)profileFields.moral=req.body.moral;
if(req.body.iq)profileFields.iq=req.body.iq;


Profile.findOne({user:req.user.id})
.then(profile=>{
    Profile.findOneAndUpdate({user:req.user.id},
      {$set:profileFields},
      {new:true}
    ).then(profile=>res.json(profile));

  });
});

// @route   POST api/profile/experience
// @desc    Add experience to profile
// @access  Private
router.post(
  '/experience',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateExperienceInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    Profile.findOne({ user: req.user.id }).then(profile => {
      const newExp = {
        title: req.body.title,
        company: req.body.company,
        location: req.body.location,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        description: req.body.description
      };

      // Add to exp array
      profile.experience.unshift(newExp);

      profile.save().then(profile => res.json(profile));
    });
  }
);

router.get(
  '/skills',
  (req, res) => {
    const errors={};
    Profile.findOne({user:req.user.id})
    .then(profile=>{
      if(!profile){
      //get remove index
      const index = profile.skillset
      .map(item=>item.id);

      }
      res.json(index);
    })
    .catch(err=>res.status(404).json(err));
  }
);

// @route   POST api/profile/education
// @desc    Add education to profile
// @access  Private
router.post(
  '/education',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateEducationInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    Profile.findOne({ user: req.user.id }).then(profile => {
      const newEdu = {
        qualification: req.body.qualification,
        institute: req.body.institute,
      grade: req.body.grade,
        from: req.body.from,
        to:req.body.to
      };
      const newSkill={
        skillset:req.body.skill,
        rating:req.body.skill_rating
      };
      // Add to exp array
      profile.education.unshift(newEdu);
      profile.skills.unshift(newSkill);
      profile.save().then(profile => res.json(profile));
    });
  }
);

// @route   DELETE api/profile/experience/:exp_id
// @desc    Delete experience from profile
// @access  Private
router.delete(
  '/experience/:exp_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        // Get remove index
        const removeIndex = profile.experience
          .map(item => item.id)
          .indexOf(req.params.exp_id);

        // Splice out of array
        profile.experience.splice(removeIndex, 1);

        // Save
        profile.save().then(profile => res.json(profile));
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route   DELETE api/profile/education/:edu_id
// @desc    Delete education from profile
// @access  Private
router.delete(
  '/education/:edu_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        // Get remove index
        const removeIndex = profile.education
          .map(item => item.id)
          .indexOf(req.params.edu_id);

        // Splice out of array
        profile.education.splice(removeIndex, 1);

        // Save
        profile.save().then(profile => res.json(profile));
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route   DELETE api/profile
// @desc    Delete user and profile
// @access  Private
router.delete(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOneAndRemove({ user: req.user.id }).then(() => {
      User.findOneAndRemove({ _id: req.user.id }).then(() =>
        res.json({ success: true })
      );
    });
  }
);
//@route delete api/profile/skills/:skillset_id
//@desc delete skillset
//@access private
router.delete('/skills/:skillset_id',passport.authenticate('jwt',{session:false}),(req,res)=>{
  const errors={};
  Profile.findOne({user:req.user.id})
  .then(profile=>{
    if(!profile){
    //get remove index
    const removeIndex = profile.skillset
    .map(item=>item.id)
    .indexof(req.params.skillset_id);
    //splice out index
    profile.skill.splice(removeIndex,1);
    //save
    profile.save().then(profile=>res.json(profile));
    }
  })
  .catch(err=>res.status(404).json(err));
});




module.exports = router;
