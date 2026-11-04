
// Botón que cambia el tema
const botonTema = document.querySelector("#dark_mode");

// Activa o quita el modo claro y cambia el texto del botón
function cambiarTema() {
  document.body.classList.toggle("modo-claro");
  if (document.body.classList.contains("modo-claro")) {
    botonTema.textContent = "Modo oscuro";
  } else {
    botonTema.textContent = "Modo claro";
  }
}

botonTema.addEventListener("click", cambiarTema);