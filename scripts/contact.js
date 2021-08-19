import { addClass, removeClass } from "./helper-functions.js";

const contactForm = document.getElementById('contactForm'),
  contactName = document.getElementById('contactName'),
  contactEmail = document.getElementById('contactEmail'),
  contactMessage = document.getElementById('contactMessage'), 
  contactSubmit = document.getElementById('contactSubmit');

/*validation functions */
function isNotEmpty(value) {
  if (value == null || typeof value == 'undefined' ) return false;
  return (value.length > 0);
}

function isEmail(email) {
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(email).toLowerCase());
}

function fieldValidation(field, validationFunction) {
  if (field == null) return false;

  let isFieldValid = validationFunction(field.value)
  if (!isFieldValid) {
    addClass(field, 'placeholderRed');
  } else {
    removeClass(field, 'placeholderRed');
  }

  return isFieldValid;
}

function isValid() {
  let valid = true;

  valid &= fieldValidation(contactName, isNotEmpty);
  valid &= fieldValidation(contactEmail, isEmail);
  valid &= fieldValidation(contactMessage, isNotEmpty);

  return valid;
}

export const handleForm = function handleForm() {
  /*contactForm.addEventListener('submit', event => {
    event.preventDefault();
    if (!isValid()) return alert('Not valid');
    
    fetch('./scripts/contact.php', {
      type: 'POST',
      credentials: 'same-origin',
      headers: {
        name: contactName,
        email: contactEmail,
        message: contactMessage
      }
    });
    
  });*/
}