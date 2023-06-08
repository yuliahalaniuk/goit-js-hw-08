import _throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const feedbackFormRef = document.querySelector('.feedback-form');
const textareaRef = document.querySelector('.feedback-form textarea');
const emailInputRef = document.querySelector('.user-email');

// let settings = {};
fillFormFields();

feedbackFormRef.addEventListener('input', _throttle(onFormInput, 500));
feedbackFormRef.addEventListener('submit', onFormSubmit);

function onFormInput({ target }) {
  // settings[target.name] = target.value;
  const formUserData = {
    email: emailInputRef.value,
    message: textareaRef.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formUserData));
}

function fillFormFields() {
  const savedInfo = localStorage.getItem(STORAGE_KEY);

  if (!savedInfo) return;

  const { message, email } = JSON.parse(savedInfo);
  textareaRef.value = message;
  emailInputRef.value = email;
}

function onFormSubmit(evt) {
  evt.preventDefault();
  if (!textareaRef.value || !emailInputRef.value) {
    return alert('All feels must be fell out!');
  }
  console.log(localStorage.getItem(STORAGE_KEY));
  localStorage.removeItem(STORAGE_KEY);
  evt.currentTarget.reset();
}
