import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const feedbackKey = 'feedback-form-state';


form.addEventListener('input', throttle(() => {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(feedbackKey, JSON.stringify(formData));
}, 500));


const savedData = localStorage.getItem(feedbackKey);
if (savedData) {
  const { email, message } = JSON.parse(savedData);
  emailInput.value = email;
  messageInput.value = message;
}


form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formData);
  localStorage.removeItem(feedbackKey);
  emailInput.value = '';
  messageInput.value = '';
});
