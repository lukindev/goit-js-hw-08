import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const feedbackData = {};
  for (const [name, value] of formData) {
    feedbackData[name] = value;
  }

  console.log('Form submitted:', feedbackData);

  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackData));
  form.reset();
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
