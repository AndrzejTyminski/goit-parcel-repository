import throttle from 'lodash.throttle';

const storageBox = 'feedback-form-state';
const formData = {};
const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', throttle(handleFormInput, 500));
formRef.addEventListener('submit', handleFormSubmit);

populateTextarea();

function handleFormInput(e) {
  console.log(e.target.name);
  console.log(e.target.value);
  formData[e.target.name] = e.target.value;
  console.log(formData);
  localStorage.setItem(storageBox, JSON.stringify(formData));
}

function handleFormSubmit(e) {
  e.preventDefault();
  const { email, message } = e.target.elements;
  if (!(email.value && message.value)) {
    return console.log('uzupelnij pola');
  }

  console.log({ email: email.value, message: message.value });
  e.currentTarget.reset();
  localStorage.removeItem(storageBox);
}

function populateTextarea() {
  const savedDataForm = localStorage.getItem(storageBox);
  if (savedDataForm === null) {
    return;
  }

  const parsedDataForm = JSON.parse(savedDataForm);

  for (const [name, value] of Object.entries(parsedDataForm)) {
    formRef.elements[name].value = value;
    formData[name] = value;
  }
}
