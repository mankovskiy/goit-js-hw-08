import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);

refs.form.addEventListener('input', throttle(onFormInput, 500));

const formData = localStorage.getItem(STORAGE_KEY)
  ? JSON.parse(localStorage.getItem(STORAGE_KEY))
  : {};
function onFormInput(e) {
  formData.email = e.currentTarget.email.value;
  formData.message = e.currentTarget.message.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  if (refs.input.value === '' || refs.textarea.value === '') {
    const message = 'Заполни все поля';
    return alert(message);
  }
  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

const saveTextInput = () => {
  const saveMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

  console.log(saveMessage);
  if (saveMessage) {
    if (formData.email) {
      refs.input.value = formData.email;
    }

    if (formData.message) {
      refs.textarea.value = formData.message;
    }
  }
};
saveTextInput();
