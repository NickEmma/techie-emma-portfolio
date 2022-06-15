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

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateForm();
});

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
    setError(email, 'provide a valid email address');
  } else {
    setSuccess(email);
  }

  if (messageValues === '') {
    setError(messageValue, 'description is required');
  } else {
    setSuccess(messageValue);
  }
};
