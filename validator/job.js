const Validator = require('validator');
const isEmpty = require ('./is-empty');

module.exports = function validationJobProfileInput(data){
  console.log(data);
  let errors={};
data.sector = !isEmpty(data.sector)? data.sector:'';
data.category = !isEmpty(data.category)? data.category:'';
data.domain = !isEmpty(data.domain)? data.domain:'';
data.job_role = !isEmpty(data.job_role)? data.job_role:'';
data.skill = !isEmpty(data.skill)? data.skill:'';


if(Validator.isEmpty(data.sector)){

  errors.sector='Sector field is require';
}
if(Validator.isEmpty(data.category)){

  errors.category='category field is require';
}
if(Validator.isEmpty(data.domain)){

  errors.domain='domain field is require';
}
if(Validator.isEmpty(data.job_role)){

  errors.job_role='Job Role field is require';
}
if(Validator.isEmpty(data.skill)){

  errors.skill='skillset field is require';
}
  return{
    errors,
    isValid:isEmpty(errors)
  };
};
