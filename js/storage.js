function setForm() {
  const form = document.getElementById('contact-me');
  const { elements: { name, email, message } } = form;

  const formData = {
    name: name.value,
    email: email.value,
    message: message.value,
  };

  return formData;
}

function saveForm(formData) {
  localStorage.setItem('form', JSON.stringify(formData));
}

const resetForm = () => {
  const alertTooltip = document.querySelector('.tooltip');
  alertTooltip.classList.remove('on-error');
  alertTooltip.innerHTML = '';
  localStorage.removeItem('form');
};


const onUpdate = () => {
  saveForm(setForm());
};

const refreshForm = (form) => {
  const savedForm = JSON.parse(localStorage.getItem('form'));
  if (savedForm) {
    const { name, email, message } = form.elements;
    name.value = savedForm.name;
    email.value = savedForm.email;
    message.value = savedForm.message;
  }
};

export { onUpdate, refreshForm, resetForm };
