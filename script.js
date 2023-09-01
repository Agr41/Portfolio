document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');
  
    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  });

  // Obtiene una referencia al enlace de Firebaseweb
const firebasewebLink = document.getElementById("firebasewebLink");

// Obtiene una referencia al elemento infoweb
const infowebElement = document.querySelector(".infoweb");

// Agrega un controlador de eventos al enlace
firebasewebLink.addEventListener("click", function(event) {
  // Evita que se realice la acción predeterminada del enlace
  event.preventDefault();
  
  // Alterna la visibilidad del elemento infoweb agregando o quitando la clase "visible"
  infowebElement.classList.toggle("visible");
});

// Obtiene una referencia al botón de cierre
const closeButton = document.getElementById("closeButton");

// Agrega un controlador de eventos al botón de cierre
closeButton.addEventListener("click", function(event) {
  // Oculta el elemento infoweb al hacer clic en el botón de cierre
  infowebElement.classList.remove("visible");
});
