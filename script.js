// Fonction de chargement de la page du pong
const input = document.getElementById('searchInput');
const submitButton = document.getElementById('searchSubmit');

const site = 'https://novaenebulae.github.io/PONG-JavaScript/';

function submit(event) {
if (input.value.trim().toLowerCase() === 'pong') {
    event.preventDefault();
    const win = window.open(site, '_blank');
    win.focus();
}
}

submitButton.addEventListener('click', submit);

input.addEventListener("keypress", function (event) {
  if (event.key=== 'Enter') {
    event.preventDefault();
    submit(event);
  }
});

