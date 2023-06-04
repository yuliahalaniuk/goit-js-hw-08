import _throttle from 'lodash.throttle';

const feedbackFormRef = document.querySelector('.feedback-form');
const textareaRef = document.querySelector('.feedback-form textarea');
const emailInputRef = document.querySelector('.user-email');

const STORAGE_KEY = 'feedback-form-state';

let settings = {};
fillFormFields();

feedbackFormRef.addEventListener('submit', onFormSubmit);
feedbackFormRef.addEventListener('input', _throttle(onFormInput, 500));

function onFormInput({ target }) {
  //   if (target.nodeName === 'INPUT') {
  //     settings.email = target.value;
  //   } else if (target.nodeName === 'TEXTAREA') {
  //     settings.message = target.value;
  //   }

  settings[target.name] = target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}

function fillFormFields() {
  const savedInfo = localStorage.getItem(STORAGE_KEY);

  if (savedInfo) {
    const { message, email } = JSON.parse(savedInfo);
    textareaRef.value = message;
    emailInputRef.value = email;
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(localStorage.getItem(STORAGE_KEY));
  localStorage.removeItem(STORAGE_KEY);
  evt.currentTarget.reset();
}
