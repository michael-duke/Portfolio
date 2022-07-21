const form = document.getElementById('contact-me');
const { elements: { name, email, message } } = form;

const formData = {
  name: name.value,
  email: email.value,
  message: message.value,
};

function saveForm() {
  localStorage.setItem('form', JSON.stringify(formData));
}

const onUpdate = (e) => {
  const {
    target: { value },
    target: { name },
  } = e;
  formData[name] = value;
  console.log(formData, 'Form object');
  saveForm();
};
const refreshForm = (form) => {
  const savedForm = JSON.parse(localStorage.getItem('form'));
  console.log(savedForm);
  const { name, email, message } = form.elements;
  name.value = savedForm.name;
  email.value = savedForm.email;
  message.value = savedForm.message;
};
export {onUpdate, refreshForm };
