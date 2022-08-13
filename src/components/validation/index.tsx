// import  runValidate from './runValidate';
import isEmpty from './is-empty';

export const validateForm = function(formData) {
    const errors = {};

    Object.keys(formData).forEach(function(key) {
        // errors[key] = runValidate(key, formData[key]);
        console.log(key, formData[key]);
    });
    
  return {
    errors,
    isValid: isEmpty(errors)
  };
}