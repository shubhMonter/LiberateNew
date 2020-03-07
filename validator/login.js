const Validator = require('validator');
const isEmpty = require ('./is-empty');

module.exports = function validationLoginInput(data){
  let errors={};
data.email = !isEmpty(data.email)? data.email:'';
data.password = !isEmpty(data.password)? data.password:'';

  if(Validator.isEmpty(data.email)){
  errors.email='email field is require';
  }
  if(!Validator.isEmail(data.email)){
    errors.email='email is invalid';
  }
if(Validator.isEmpty(data.password)){
  errors.password='password field is require';
}

  return{
    errors,
    isValid:isEmpty(errors)
  };
};
