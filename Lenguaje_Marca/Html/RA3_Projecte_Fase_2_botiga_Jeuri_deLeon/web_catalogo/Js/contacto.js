// Campos del formulario
const formulario = document.querySelector("#contact_form form");
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const telefono = document.querySelector("#numero");
const mensaje = document.querySelector("#mensaje");

// Contador bajo el textarea
const contadorMensaje = document.createElement("p");
contadorMensaje.textContent = "0 / 300 caracteres";
mensaje.after(contadorMensaje);

// Actualiza el contador al escribir
function actualizarContador() {
  contadorMensaje.textContent = mensaje.value.length + " / 300 caracteres";
}

// Borra los errores en pantalla
function borrarErrores() {
  const avisos = document.querySelectorAll(".mensaje-error");
  for (const aviso of avisos) {
    aviso.remove();
  }
  nombre.classList.remove("error");
  email.classList.remove("error");
  telefono.classList.remove("error");
  mensaje.classList.remove("error");
}

// Muestra un error bajo el campo
function mostrarError(campo, texto) {
  const aviso = document.createElement("p");
  aviso.classList.add("mensaje-error");
  aviso.textContent = texto;
  campo.classList.add("error");
  campo.after(aviso);
}

// Valida los campos y, si todo es correcto, muestra el resumen
function validarFormulario(evento) {
  evento.preventDefault();
  borrarErrores();

  let todoCorrecto = true;

  // Nombre: mínimo 3 caracteres
  if (nombre.value.trim().length < 3) {
    mostrarError(nombre, "El nombre debe tener al menos 3 caracteres.");
    todoCorrecto = false;
  }

  // Expresión regular para un correo válido
  const correo = email.value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
    mostrarError(email, "Escribe un correo válido, por ejemplo correo@ejemplo.com.");
    todoCorrecto = false;
  }

  // Teléfono: 9 cifras que empiezan por 6, 7, 8 o 9 (formato español)
  const telefonoLimpio = telefono.value.replaceAll(" ", "").replaceAll("-", "");
  if (!/^[6-9]\d{8}$/.test(telefonoLimpio)) {
    mostrarError(telefono, "Escribe un teléfono de 9 cifras.");
    todoCorrecto = false;
  }

  // Mensaje: entre 20 y 300 caracteres
  const largo = mensaje.value.trim().length;
  if (largo < 20 || largo > 300) {
    mostrarError(mensaje, "El mensaje debe tener entre 20 y 300 caracteres.");
    todoCorrecto = false;
  }

  if (todoCorrecto) {
    mostrarResumen();
  }
}

// Muestra la tarjeta de confirmación y vacía el formulario
function mostrarResumen() {
  const anterior = document.querySelector("#resumen");
  if (anterior) {
    anterior.remove();
  }

  const tarjeta = document.createElement("article");
  tarjeta.id = "resumen";

  const gracias = document.createElement("h2");
  gracias.textContent = "¡Gracias, " + nombre.value.trim() + "!";

  const datoCorreo = document.createElement("p");
  datoCorreo.textContent = "Correo: " + email.value.trim();

  const datoTelefono = document.createElement("p");
  datoTelefono.textContent = "Teléfono: " + telefono.value.trim();

  const datoMensaje = document.createElement("p");
  datoMensaje.textContent = "Mensaje: " + mensaje.value.trim();

  tarjeta.appendChild(gracias);
  tarjeta.appendChild(datoCorreo);
  tarjeta.appendChild(datoTelefono);
  tarjeta.appendChild(datoMensaje);
  formulario.after(tarjeta);

  formulario.reset();
  actualizarContador();
}

// Quita el error de un campo en cuanto el usuario lo modifica
function quitarErrorCampo(evento) {
  const campo = evento.target;
  campo.classList.remove("error");
  const aviso = campo.nextElementSibling;
  if (aviso && aviso.classList.contains("mensaje-error")) {
    aviso.remove();
  }
}

formulario.addEventListener("submit", validarFormulario);
formulario.addEventListener("input", quitarErrorCampo);
mensaje.addEventListener("input", actualizarContador);