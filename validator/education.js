const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
  let errors = {};


//  if (Validator.isEmpty(data.from)) {
//    errors.from = 'From date field is required';
//  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
