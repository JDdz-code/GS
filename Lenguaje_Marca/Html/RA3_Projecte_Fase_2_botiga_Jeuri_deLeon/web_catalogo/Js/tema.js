
// Le he pedido a la ia que hiciera el localstorage ya que la web no guardaba la select del tema, prompt utilizado: "El tema claro no se mantiene mientras hacemos cambios entre paginas, crea un localstorage para guardar el tema."  
const STORAGE_KEY = "catalogoTema";

// Buscamos el botón de cambiar tema en la página
const botonTema = document.querySelector("#dark_mode");

// Función para aplicar el tema seleccionado
function aplicarTema(tema) {
  // Si el tema es claro, activamos la clase "modo-claro"; si no, la quitamos
  const esClaro = tema === "claro";
  document.body.classList.toggle("modo-claro", esClaro);

  // Cambiamos el texto del botón para que diga el siguiente estado
  if (botonTema) {
    botonTema.textContent = esClaro ? "Modo oscuro" : "Modo claro";
  }

  // Guardamos la elección del usuario en el navegador para que se recuerde
  localStorage.setItem(STORAGE_KEY, tema);
}

/// Función para recuperar el tema guardado anteriormente
function obtenerTemaGuardado() {
  // Leemos el valor guardado con la clave STORAGE_KEY
  const temaGuardado = localStorage.getItem(STORAGE_KEY);

  // Si el valor guardado es válido, lo devolvemos; si no, por defecto será oscuro
  return temaGuardado === "oscuro" || temaGuardado === "claro"
    ? temaGuardado
    : "oscuro";
}

// Cuando la página carga, aplicamos el tema guardado
if (botonTema) {
  aplicarTema(obtenerTemaGuardado());

  // Cuando el usuario hace clic en el botón, alternamos entre claro y oscuro
  botonTema.addEventListener("click", () => {
    const temaActual = document.body.classList.contains("modo-claro") ? "claro" : "oscuro";
    aplicarTema(temaActual === "claro" ? "oscuro" : "claro");
  });
}