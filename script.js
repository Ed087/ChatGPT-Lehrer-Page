document
  .getElementById('darkModeToggle')
  .addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
  });
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Verhindert das Neuladen der Seite

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let feedback = document.getElementById('feedback');

    if (name === '' || email === '' || message === '') {
      feedback.textContent = 'Bitte fülle alle Felder aus!';
    } else {
      feedback.style.color = 'green';
      feedback.textContent = 'Nachricht erfolgreich gesendet!';
      form.reset(); // Formular leeren
    }
  });
});
