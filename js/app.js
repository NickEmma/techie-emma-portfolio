const menu = document.querySelector('#menu');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');

  navbar.classList.toggle('active');
});

window.onscroll = () => {
  menu.classList.remove('fa-times');

  navbar.classList.remove('active');
};

// form validation path
const form = document.querySelector('#form');
const nameValue = document.querySelector('#name');
const email = document.querySelector('#email');
const messageValue = document.querySelector('#message');

const setError = (element, message) => {
  const inputBox = element.parentElement;
  const errorShow = inputBox.querySelector('.error');
  errorShow.innerText = message;
  inputBox.classList.add('error');
  inputBox.classList.remove('success');
};

const setSuccess = (element) => {
  const inputBox = element.parentElement;
  const errorShow = inputBox.querySelector('.error');
  errorShow.innerText = '';
  inputBox.classList.add('success');
  inputBox.classList.remove('error');
};

const isMailValid = (email) => {
  const regX = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  return regX.test(String(email).toLowerCase());
};

const validateForm = () => {
  const nameValues = nameValue.value.trim();
  const emailValue = email.value.trim();
  const messageValues = messageValue.value.trim();

  if (nameValues === '') {
    setError(nameValue, 'name is required');
  } else {
    setSuccess(nameValue);
  }

  if (emailValue === '') {
    setError(email, 'Email is required');
  } else if (!isMailValid(emailValue)) {
    setError(email, 'Email should be in lowercase');
  } else {
    setSuccess(email);
  }

  if (messageValues === '') {
    setError(messageValue, 'description is required');
  } else {
    setSuccess(messageValue);
    form.submit();
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateForm();
});

// local storage path
const nameForm = document.querySelector('#name');
const emailForm = document.querySelector('#email');
const messageForm = document.querySelector('#message');
function handleChange() {
  const formData = {
    fullName: nameForm.value,
    email: emailForm.value,
    message: messageForm.value,
  };
  localStorage.setItem('form', JSON.stringify(formData));
}
document.addEventListener('DOMContentLoaded', () => {
  const getFormValue = localStorage.getItem('form');
  if (getFormValue) {
    const formObject = JSON.parse(getFormValue);
    nameForm.value = formObject.fullName;
    emailForm.value = formObject.email;
    messageForm.value = formObject.message;
  }
});
nameForm.onchange = handleChange;
emailForm.onchange = handleChange;
messageForm.onchange = handleChange;
