// Lista de juegos del catálogo (precio sin IVA)
const juegos = [
  {
    id: "RET-001",
    titulo: "Chrono Trigger",
    genero: ["RPG", "Aventura"],
    plataforma: ["SNES"],
    precio: 35.99,
    valoracion: 9.1,
    stock: 11,
    imagen: "./Imagenes/img_caj1.jpg",
    descripcion: "Legendario RPG sobre viajes en el tiempo con diseños de Akira Toriyama. Conserva la caja original y el manual en perfecto estado."
  },
  {
    id: "RET-002",
    titulo: "Castlevania: Symphony of the Night",
    genero: ["Acción", "Aventura", "Metroidvania"],
    plataforma: ["PlayStation", "Saturn"],
    precio: 41.90,
    valoracion: 5.5,
    stock: 7,
    imagen: "./Imagenes/img_caj2.jpg",
    descripcion: "La obra cumbre que definió un género entero dentro del castillo de Drácula. Edición Black Label completa en caja de metacrilato."
  },
  {
    id: "RET-003",
    titulo: "Super Mario World",
    genero: ["Plataformas"],
    plataforma: ["SNES"],
    precio: 45.50,
    valoracion: 9.6,
    stock: 8,
    imagen: "./Imagenes/img_caj3.jpg",
    descripcion: "El clásico de plataformas de Mario y Yoshi con decenas de niveles y secretos por descubrir."
  },
  {
    id: "RET-004",
    titulo: "The Legend of Zelda: Ocarina of Time",
    genero: ["Aventura", "Acción"],
    plataforma: ["Nintendo 64"],
    precio: 59.00,
    valoracion: 9.2,
    stock: 12,
    imagen: "./Imagenes/img_caj4.JPG",
    descripcion: "La transición al 3D que cambió la industria de los videojuegos para siempre. Incluye pila de salvado recién cambiada."
  },
  {
    id: "RET-005",
    titulo: "Street Fighter II Turbo",
    genero: ["Lucha"],
    plataforma: ["SNES", "Mega Drive", "Arcade"],
    precio: 39.00,
    valoracion: 9.9,
    stock: 4,
    imagen: "./Imagenes/img_caj5.png",
    descripcion: "Velocidad endiablada y los doce luchadores originales reunidos en el cartucho rey de los salones recreativos."
  },
  {
    id: "RET-006",
    titulo: "Silent Hill",
    genero: ["Terror", "Puzle"],
    plataforma: ["PlayStation"],
    precio: 99.00,
    valoracion: 9.3,
    stock: 12,
    imagen: "./Imagenes/img_caj6.webp",
    descripcion: "Terror psicológico envuelto en niebla, con puzles y una atmósfera inquietante que marcó un antes y un después."
  },
  {
    id: "RET-007",
    titulo: "Metal Slug: Super Vehicle-001",
    genero: ["Acción", "Shooter"],
    plataforma: ["Neo Geo", "Saturn", "PlayStation", "Arcade"],
    precio: 39.00,
    valoracion: 7.7,
    stock: 0,
    imagen: "./Imagenes/img_caj7.jpg",
    descripcion: "Caos de disparos en 2D y animaciones pixel art hechas completamente a mano. Actualmente agotado, disponible bajo reserva."
  },
  {
    id: "RET-008",
    titulo: "Pokémon Edición Roja",
    genero: ["RPG"],
    plataforma: ["Game Boy"],
    precio: 68.99,
    valoracion: 9.4,
    stock: 6,
    imagen: "./Imagenes/img_caj8.jpg",
    descripcion: "El fenómeno mundial donde empezó todo el viaje por la región de Kanto. Cartucho gris con pegatina original intacta."
  }
];

// Porcentaje de IVA que se aplica a todos los precios
const TIPO_IVA = 21;

// Devuelve el precio con IVA a partir del precio sin IVA
function calculaPrecioConIva(precio) {
  return precio + (precio * TIPO_IVA / 100);
}

// Referencias a los elementos del HTML
const contenedor = document.querySelector("#Catalogo");
const buscador = document.querySelector("#buscador");
const filtroPlataforma = document.querySelector("#filtro-plataforma");
const contador = document.querySelector("#contador");

// Crea y devuelve la tarjeta (article) de un juego
function crearTarjeta(juego) {
  const tarjeta = document.createElement("article");
  tarjeta.classList.add("card_juegos");

  const titulo = document.createElement("p");
  titulo.textContent = juego.titulo;
  titulo.classList.add("titulo_caja_catalogo");

  const imagen = document.createElement("img");
  imagen.src = juego.imagen;
  imagen.alt = "Img " + juego.titulo;

  const genero = document.createElement("h5");
  genero.textContent = juego.genero.join(" | ");

  const precio = document.createElement("h5");
  precio.classList.add("precio");
  precio.textContent = calculaPrecioConIva(juego.precio).toFixed(2) + "€";

  const valoracion = document.createElement("h5");
  valoracion.classList.add("valoracion");
  valoracion.textContent = "Nota:" + juego.valoracion;

  const stock = document.createElement("h5");
  stock.classList.add("stock");
  stock.textContent = "Stock: " + juego.stock;

  // Si quedan menos de 5 unidades, marca la tarjeta como stock bajo
  if (juego.stock < 5) {
    tarjeta.classList.add("stock-bajo");
  }

  // Si no queda ninguna unidad, muestra "Agotado"
  if (juego.stock === 0) {
    stock.textContent = "Agotado";
  }

  const descripcion = document.createElement("p");
  descripcion.classList.add("descripcion");
  descripcion.textContent = juego.descripcion;

  const btn_ver = document.createElement("a");
  btn_ver.href = "ficha.html";
  btn_ver.classList.add("btn_vermas");
  btn_ver.textContent = "Ver más";

  const plataforma = document.createElement("h5");
  plataforma.classList.add("plataforma");
  plataforma.textContent = juego.plataforma.join(", ");

  tarjeta.appendChild(titulo);
  tarjeta.appendChild(imagen);
  tarjeta.appendChild(genero);
  tarjeta.appendChild(plataforma);
  tarjeta.appendChild(precio);
  tarjeta.appendChild(valoracion);
  tarjeta.appendChild(stock);
  tarjeta.appendChild(descripcion);
  tarjeta.appendChild(btn_ver);

  return tarjeta;
}

// Borra el catálogo y pinta la lista recibida, con contador y mensaje de vacío
function mostrarJuegos(lista) {
  contenedor.textContent = "";

  contador.textContent = "Mostrando " + lista.length + " de " + juegos.length + " juegos";

  if (lista.length === 0) {
    const mensaje = document.createElement("p");
    mensaje.textContent = "No se ha encontrado ningún juego";
    contenedor.appendChild(mensaje);
    return;
  }

  for (const juego of lista) {
    contenedor.appendChild(crearTarjeta(juego));
  }
}

// Filtra los juegos por título y plataforma a la vez, y los vuelve a pintar
function filtrarJuegos() {
  const texto = buscador.value.trim().toLowerCase();
  const plataformaElegida = filtroPlataforma.value;

  const resultado = juegos.filter((juego) => {
    const coincideTitulo = juego.titulo.toLowerCase().includes(texto);
    const coincidePlataforma =
      plataformaElegida === "Todas" || juego.plataforma.includes(plataformaElegida);
    return coincideTitulo && coincidePlataforma;
  });

  mostrarJuegos(resultado);
}

// Cada vez que se escribe o se cambia el select, se vuelve a filtrar
buscador.addEventListener("input", filtrarJuegos);
filtroPlataforma.addEventListener("change", filtrarJuegos);

// Al cargar la página se muestran todos los juegos
mostrarJuegos(juegos);

