const isValidEmail = (email) => {
  const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegExp.test(String(email));
};

const validateForm = (event) => {
  event.preventDefault();
  const { target: form } = event;

  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  const alertTooltip = document.querySelector('.tooltip');

  if (name.length < 1 || name === undefined) {
    alertTooltip.innerHTML = '* Make sure to fill your name';
    alertTooltip.classList.add('on-error');
  } else if (
    email !== email.toLowerCase()
    || email.length < 1
    || email === undefined
  ) {
    alertTooltip.innerHTML = '* Make sure you fill your email and that it is in lower case.';
    alertTooltip.classList.add('on-error');
    alertTooltip.style.opacity = 1;
  } else if (!isValidEmail(email)) {
    alertTooltip.innerHTML = '* Make sure to provide a valid email.';
    alertTooltip.classList.add('on-error');
  } else if (message.length < 5 || message === undefined) {
    alertTooltip.innerHTML = '* Your message should have at least 5 characters';
    alertTooltip.classList.add('on-error');
  } else {
    alertTooltip.innerHTML = `Well done <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="24" height="24"
    viewBox="0 0 24 24"
    style=" fill:#ffffff;">    <path d="M11.707,15.707C11.512,15.902,11.256,16,11,16s-0.512-0.098-0.707-0.293l-4-4c-0.391-0.391-0.391-1.023,0-1.414 s1.023-0.391,1.414,0L11,13.586l8.35-8.35C17.523,3.251,14.911,2,12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10 c0-1.885-0.531-3.642-1.438-5.148L11.707,15.707z"></path></svg>`;
    alertTooltip.classList.remove('on-error');
    alertTooltip.classList.add('on-success');
    setTimeout(() => {
      form.submit();
    }, 1250);
  }
};

export default validateForm;
