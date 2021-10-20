const Validator = require("validator")
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data){
    let errors = {};

    data.name = !isEmpty(data.name)? data.name: "";
    data.email = !isEmpty(data.email)? data.email: "";
    data.username = !isEmpty(data.username)? data.username: "";
    data.password = !isEmpty(data.password)? data.password: "";

    // Name Check 
    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required"
    }

    // Email Check 
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required"
    }
    else if(!Validator.isEmail(data.email)){
        errors.email = "Email is invalid"
    }

    // Username Check 
    if (Validator.isEmpty(data.username)) {
        errors.username = "Username field is required"
    }

    // Password Check 
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required"
    }

    if (!Validator.isLength(data.password,{min:6, max:30})) {
        errors.password = "Password must be at least 6 characters"
    }

    return {
        errors,
        isValid:isEmpty(errors)
    }

}