const Validator = require('validator');
const isEmpty = require ('./is-empty');

module.exports = function validationProfileInput(data){
  console.log(data);
  let errors={};
data.handle = !isEmpty(data.handle)? data.handle:'';
data.mobile = !isEmpty(data.mobile)? data.mobile:'';

data.dob = !isEmpty(data.dob)? data.dob:'';
data.bio = !isEmpty(data.bio)? data.bio:'';
data.company = !isEmpty(data.company)? data.company:'';
data.country = !isEmpty(data.country)? data.country:'';



//data.skill = !isEmpty(data.skillset)? data.skill:'';

if(Validator.isEmpty(data.handle)){

  errors.handle='Username field is require';
}
if(Validator.isEmpty(data.mobile)){

  errors.mobile='Mobile field is require';
}

if(Validator.isEmpty(data.dob)){

  errors.dob='Date of birth field is require';
}
if(Validator.isEmpty(data.company)){

  errors.company='Current Company name field is require';
}
if(Validator.isEmpty(data.country)){

  errors.country='Country name field is require';
}
  if (!Validator.isLength(data.handle,{min:2, max:30})){

    errors.handle='handle must be between 2 and 30 characters';
  }
  if (!Validator.isInt(data.mobile)){

    errors.mobile='please enter valid Mobile Number';
  }
  if (!Validator.isLength(data.mobile,{min:10, max:10})){

    errors.mobile='Please enter valid Mobile Number';
  }

  //if(Validator.isEmpty(data.skillset)){

  //errors.skillset='skills field is require';
  //}

  return{
    errors,
    isValid:isEmpty(errors)
  };
};
