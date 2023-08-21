import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

function updateLocalStorage(formData) {
  const feedbackData = {};
  for (const [name, value] of formData) {
    feedbackData[name] = value;
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackData));
}

form.addEventListener(
  'input',
  throttle(function (event) {
    const formData = new FormData(form);
    updateLocalStorage(formData);
  }, 500)
);

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const feedbackData = {};
  for (const [name, value] of formData) {
    feedbackData[name] = value;
  }

  if (feedbackData.email.trim() === '' || feedbackData.message.trim() === '') {
    alert('Please fill in all fields before submitting.');
  } else {
    console.log('Form submitted:', feedbackData);

    updateLocalStorage(formData);

    form.reset();
  }
});

const savedFeedbackState = localStorage.getItem('feedback-form-state');
if (savedFeedbackState) {
  const feedbackData = JSON.parse(savedFeedbackState);
  for (const name in feedbackData) {
    if (name in form.elements) {
      form.elements[name].value = feedbackData[name];
    }
  }
}
