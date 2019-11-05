function producePrompt(message, promptLocation, color) {
  document.getElementById(promptLocation).innerHTML = message;
  document.getElementById(promptLocation).style.color = color;
}

function validateEmail() {
  var login_email = document.forms["login_form"]["email"];
  var signup_email = document.forms["signup_form"]["email"];

  login_email.addEventListener('keydown', function() {
    if (this.value.length == 0) {
      producePrompt('Please enter an Email', 'email-error', 'red');
      return false;
    }
    if (!this.value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      producePrompt('Invalid Email', 'email-error', 'red');
      return false;
    }
    producePrompt('Valid Email', 'email-error', 'green');
    return true;
  });

  signup_email.addEventListener('keydown', function() {
    if (this.value.length == 0) {
      producePrompt('Please enter an Email', 'signup-email-error', 'red');
      return false;
    }
    if (!this.value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      producePrompt('Invalid Email', 'signup-email-error', 'red');
      return false;
    }
    producePrompt('Valid Email', 'signup-email-error', 'green');
    return true;
  });

}


function validateName() {
  var signup_name = document.forms["signup_form"]["name"].value;

  if (signup_name.length == 0) {
    producePrompt('Name is required', 'signup-name-error', 'red')
    return false;
  }

  // if (!signup_name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
  //   producePrompt('First and last name, please.', 'signup-name-error', 'red');
  //   return false;
  // }

  if (signup_name.length <= 4) {
    producePrompt('Name should be more then 4 character.', 'signup-name-error', 'red');
    return false;
  }

  producePrompt('Valid', 'signup-name-error', 'green');
  return true;
}


function validatePhone() {

  var phone = document.forms["signup_form"]["phone"].value;

  if (phone.length == 0) {
    producePrompt('Phone number is required.', 'signup-phone-error', 'red');
    return false;
  }

  if (phone.length != 10) {
    producePrompt('Length more than 10.', 'signup-phone-error', 'red');
    return false;
  }

  if (!phone.match(/^[0-9]{10}$/)) {
    producePrompt('Only digits, please.', 'signup-phone-error', 'red');
    return false;
  }

  producePrompt('Valid', 'signup-phone-error', 'green');
  return true;

}


function validatePassword() {

  var signup_pass = document.forms["signup_form"]["password"].value;

  if (signup_pass.length == 0) {
    producePrompt('Please enter the password', 'signup-pass-error','red');
    return false;
  }

  if (signup_pass.length < 8) {
    producePrompt('Too Short', 'signup-pass-error','red');
    return false;
  }

  if (signup_pass.length < 11) {
    producePrompt('Medium', 'signup-pass-error','Orange');
    return false;
  }

  // if (!signup_pass.match(/^[0-9A-Z]{10}$/)) {
  //   producePrompt('Only digits, please.', 'signup-pass-error', 'red');
  //   return false;
  // }

  producePrompt('Strong', 'signup-pass-error', 'green');
  return true;

}


function LoginValidatePassword() {

  var login_pass = document.forms["login_form"]["password"].value;

  if (login_pass.length == 0) {
    producePrompt('Please enter the password', 'login-pass-error','red');
    return false;
  }

  if (login_pass.length < 8) {
    producePrompt('Too Short', 'login-pass-error','red');
    return false;
  }

  if (login_pass.length < 11) {
    producePrompt('Medium', 'login-pass-error','Orange');
    return false;
  }

  // if (!login_pass.match(/^[0-9A-Z]{10}$/)) {
  //   producePrompt('Only digits, please.', 'login-pass-error', 'red');
  //   return false;
  // }

  producePrompt('Strong', 'login-pass-error', 'green');
  return true;

}


function confirmPassword() {
  var signup_confpass = document.forms["signup_form"]["conf_password"].value;
  var signup_pass = document.forms["signup_form"]["password"].value;

  if (signup_confpass != signup_pass) {
    producePrompt('Not matching', 'signup-confpass-error', 'red');
    return false;
  }

  producePrompt('Password Match', 'signup-confpass-error', 'green');
  return true;
}


function LoginValidateForm() {
  const log_email = "saurabh@gmail.com";
  const log_pass = "saurabh96";

  var login_email = document.forms["login_form"]["email"].value;
  var login_pass = document.forms["login_form"]["password"].value;

  if ((login_email === log_email) && (login_pass === log_pass)) {
    window.location = 'profile.html';
  }
  else {
    document.getElementById('login_fail_msg').style.display = 'block';
  }
}


function SignupValidateForm() {
  if (validateName() === "false" || validatePhone() === "false" || validateEmail() === "false" || validatePassword() === "false") {
    console.log("error");
  }
  else {
    console.log("success");
  }
}
