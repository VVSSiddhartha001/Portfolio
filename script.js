document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const feedbackDiv = document.getElementById('form-feedback');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent form submission
      
      const name = form.querySelector('#name').value;
      const email = form.querySelector('#email').value;
      const message = form.querySelector('#message').value;
  
      if (name && email && message) {
        feedbackDiv.textContent = 'Thank you for your message!';
        feedbackDiv.style.color = 'green';
        form.reset();
      } else {
        feedbackDiv.textContent = 'Please fill out all fields.';
        feedbackDiv.style.color = 'red';
      }
    });
  });
  