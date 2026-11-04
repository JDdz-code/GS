

/*hechopor mi 

// Referencia al botón que cambia de tema
const botonTema = document.querySelector("#dark_mode");

// Activa o desactiva la clase modo-claro en el body
function cambiarTema() {
  document.body.classList.toggle("modo-claro");
}

botonTema.addEventListener("click", cambiarTema);






hecho con ia*/
const STORAGE_KEY = "modoClaro";
const botonTema = document.querySelector("#dark_mode");

function aplicarTema(isClaro) {
  document.body.classList.toggle("modo-claro", isClaro);

  if (botonTema) {
    botonTema.textContent = isClaro ? "Modo oscuro" : "Modo claro";
  }
}

function obtenerTemaGuardado() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

function guardarTema(isClaro) {
  try {
    localStorage.setItem(STORAGE_KEY, String(isClaro));
  } catch {
    // Ignorar si el navegador bloquea localStorage
  }
}

const temaActual = obtenerTemaGuardado();
aplicarTema(temaActual);

if (botonTema) {
  botonTema.addEventListener("click", () => {
    const nuevoTema = !document.body.classList.contains("modo-claro");
    aplicarTema(nuevoTema);
    guardarTema(nuevoTema);
  });
}