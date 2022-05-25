import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};
saveTextInput();
refs.form.addEventListener('submit', onFormSubmit);

refs.form.addEventListener('input', throttle(onFormInput, 500));

const formData = localStorage.getItem(STORAGE_KEY)
  ? JSON.parse(localStorage.getItem(STORAGE_KEY))
  : {};
// const formData = {};

saveTextInput();

function onFormInput(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
}

function saveTextInput() {
  const saveMessage = localStorage.getItem(STORAGE_KEY);

  const parsMessage = JSON.parse(saveMessage);
  console.log(parsMessage);

  if (parsMessage) {
    refs.email.value = parsMessage.email;
    // refs.textarea.value = parsMessage.textarea;
  }
  if (parsMessage) {
    refs.message.value = parsMessage.message;
    // refs.textarea.value = parsMessage.textarea;
  }
}
