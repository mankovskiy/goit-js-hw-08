import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);

refs.form.addEventListener('input', throttle(onFormInput, 500));

// const formData = {};
let formData = localStorage.getItem(STORAGE_KEY)
  ? JSON.parse(localStorage.getItem(STORAGE_KEY))
  : {};
function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

saveTextInput();

function onFormSubmit(e) {
  e.preventDefault();
  // const formElements = e.currentTarget.elements;
  if (refs.input.value === '' || refs.textarea.value === '') {
    const message = 'Заполни все поля';
    return alert(message);
  }
  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);
  // console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
}

function saveTextInput() {
  let saveMessage = localStorage.getItem(STORAGE_KEY);

  if (saveMessage) {
    formData = JSON.parse(saveMessage);
    // refs.input.value = saveMessage.email;
    // refs.textarea.value = saveMessage.message;
  }
  if (formData.email) {
    refs.input.value = formData.email;
  }

  if (formData.message) {
    refs.textarea.value = formData.message;
  }
}
