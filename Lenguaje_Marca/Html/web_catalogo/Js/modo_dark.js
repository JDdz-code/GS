// Referencia al botón que cambia de tema
const botonTema = document.querySelector("#dark_mode");

// Activa o desactiva la clase modo-claro en el body
function cambiarTema() {
  document.body.classList.toggle("modo-claro");
}

botonTema.addEventListener("click", cambiarTema);