import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const feedback = { email: '', message: '' };

document.addEventListener('DOMContentLoaded', event => {
  const savedFeedback = localStorage.getItem('feedback-form-state');

  if (savedFeedback !== null) {
    const parsedFeedback = JSON.parse(savedFeedback);

    feedback.email = parsedFeedback.email;
    feedback.message = parsedFeedback.message;

    feedbackForm.elements.email.value = feedback.email;
    feedbackForm.elements.message.value = feedback.message;
  }
});

const formInputUpdate = event => {
  event.preventDefault();

  if (event.target.nodeName === 'INPUT') {
    feedback.email = event.target.value;
  } else if (event.target.nodeName === 'TEXTAREA') {
    feedback.message = event.target.value;
  } else {
    return;
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(feedback));
};

function formSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, message },
  } = event.currentTarget;

  if (email.value === '' || message.value === '') {
    alert('Всі поля повинні бути заповнені !');
  } else {
    event.currentTarget.reset();

    const savedFeedback = localStorage.getItem('feedback-form-state');
    const parsedFeedback = JSON.parse(savedFeedback);
    console.log(parsedFeedback);

    localStorage.removeItem('feedback-form-state');
  }
}

feedbackForm.addEventListener('input', throttle(formInputUpdate, 500));
feedbackForm.addEventListener('submit', formSubmit);
