const MAIN_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textArea = form.querySelector('textarea');

form.addEventListener('input', onFormHandle);
form.addEventListener('submit', onSubmitHendle);
const checkEmail = '';
const checkMessage = '';

function onSubmitHendle(event) {
  event.preventDefault();
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  if (email !== checkEmail && message !== checkMessage) {
    const objValues = {
      email,
      message,
    };

    console.log(objValues);
    localStorage.removeItem(MAIN_KEY);
    form.reset();
  }
}

function onFormHandle() {
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  const objValues = {
    email,
    message,
  };

  //   console.log(objValues);
  saveToLocal(MAIN_KEY, objValues);
}
onFormHandle();

function saveToLocal(key, value) {
  const arch = JSON.stringify(value);
  localStorage.setItem(key, arch);
}

function loadFromLocal(key) {
  const arch = localStorage.getItem(key);

  try {
    return JSON.parse(arch);
  } catch {
    return arch;
  }
}

function init() {
  const data = loadFromLocal(MAIN_KEY) || {};
  form.elements.email.value = data.email || '';
  form.elements.message.value = data.message || '';
}

init();
