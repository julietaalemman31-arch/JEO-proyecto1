
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle) {
  navToggle.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });
}


const contenidoBotones = document.querySelectorAll('.contenido-titulo');

contenidoBotones.forEach(function (boton) {
  boton.addEventListener('click', function () {
    const texto = boton.nextElementSibling;
    texto.classList.toggle('abierta');
  });
});