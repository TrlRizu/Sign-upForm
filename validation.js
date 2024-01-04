function isEmailValid(email) {
    return email.includes('@');
}


function setupValidation(inputId, iconId) {
    var input = document.getElementById(inputId);
    var checkIcon = document.getElementById(iconId);
  
    input.addEventListener('input', function () {
      if (input.checkValidity()) {
        checkIcon.style.display = 'flex';
        input.classList.remove('invalid');
      } else {
        checkIcon.style.display = 'none';
        input.classList.add('invalid');
      }
    });
}

function emailValidation(inputId, iconId) {
    var input = document.getElementById(inputId);
    var checkIcon = document.getElementById(iconId);

    input.addEventListener('input', function () {
        if (isEmailValid(input.value)) {
            checkIcon.style.display = 'flex';
            input.classList.remove('invalid');
        }
        else {
            checkIcon.style.display = 'none';
            input.classList.add('invalid');
        }
    });
}

function passwordValidation(inputId1, iconId1, inputId2, iconId2, minLength) {

    var input1 = document.getElementById(inputId1);
    var input2 = document.getElementById(inputId2);
    var checkIcon1 = document.getElementById(iconId1);
    var checkIcon2 = document.getElementById(iconId2);

    

    function validatePassword() {
        if (input1.value === input2.value && input1.value.length >= minLength) {
            checkIcon1.style.display = 'flex';
            input1.classList.remove('invalid');
    
            checkIcon2.style.display = 'flex';
            input2.classList.remove('invalid');
        } else {
            checkIcon1.style.display = 'none';
            input1.classList.add('invalid');
    
            checkIcon2.style.display = 'none';
            input2.classList.add('invalid');
        }
    }

    input1.addEventListener('input', validatePassword);
    input2.addEventListener('input', validatePassword);

    input1.addEventListener('focus', validatePassword);
    input2.addEventListener('focus', validatePassword);
}

var check = function() {
    passwordValidation('passwordInput', 'checkIconPassword', 'confirmInput', 'checkIconConfirm', 5);
}
   


setupValidation('firstNameInput', 'checkIconFirstName');
setupValidation('lastNameInput', 'checkIconLastName');
setupValidation('phoneNumberInput', 'checkIconPhoneNumber');
emailValidation('emailInput', 'checkIconEmail');
passwordValidation('passwordInput', 'checkIconPassword', 'confirmInput', 'checkIconConfirm');

  