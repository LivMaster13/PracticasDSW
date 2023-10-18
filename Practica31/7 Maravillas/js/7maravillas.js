// Definición de las imágenes de las maravillas y sus respuestas correctas
let maravillas = [
  "chichen-itza.svg",
  "coliseo.svg",
  "cristo-redentor.svg",
  "machu-picchu.svg",
  "muralla-china.svg",
  "petra.svg",
  "taj-mahal.svg",
];
let correcta = [1, 0, 2, 1, 2, 0, 1];

// Opciones de respuesta para cada maravilla
let opciones = [];
opciones.push(["Machu Picchu", "Chichen Itza", "Coliseo"]);
opciones.push(["Coliseo", "Petra", "Cristo Redentor"]);
opciones.push(["Muralla China", "Taj Mahal", "Cristo Redentor"]);
opciones.push(["Petra", "Machu Picchu", "Taj Mahal"]);
opciones.push(["Chichen Itza", "Petra", "Muralla China"]);
opciones.push(["Petra", "Machu Pichu", "Chichen Itza"]);
opciones.push(["Coliseo", "Taj Mahal", "Cristo Redentor"]);

// Variables para el seguimiento del juego
let posActual = 0;
let cantidadAcertadas = 0;

// Función para iniciar el juego
function comenzarJuego() {
  posActual = 0;
  cantidadAcertadas = 0;
  document.getElementById("pantalla-inicial").style.display = "none";
  document.getElementById("pantalla-juego").style.display = "block";
  cargarMaravilla();
}

// Función para cargar la siguiente maravilla
function cargarMaravilla() {
  if (maravillas.length <= posActual) {
    terminarJuego();
  } else {
    limpiarOpciones();

    document.getElementById("imgMaravilla").src =
      "./img/" + maravillas[posActual];
    document.getElementById("n0").innerHTML = opciones[posActual][0];
    document.getElementById("n1").innerHTML = opciones[posActual][1];
    document.getElementById("n2").innerHTML = opciones[posActual][2];
  }
}

// Función para limpiar la apariencia de las opciones
function limpiarOpciones() {
  document.getElementById("n0").className = "nombre";
  document.getElementById("n1").className = "nombre";
  document.getElementById("n2").className = "nombre";
  document.getElementById("l0").className = "letra";
  document.getElementById("l1").className = "letra";
  document.getElementById("l2").className = "letra";
}

// Función para comprobar la respuesta seleccionada por el jugador
function comprobarRespuesta(opElegida) {
  if (opElegida == correcta[posActual]) {
    // Respuesta correcta
    document.getElementById("n" + opElegida).className =
      "nombre nombreAcertada";
    document.getElementById("l" + opElegida).className = "letra letraAcertada";
    cantidadAcertadas++;
  } else {
    // Respuesta incorrecta
    document.getElementById("n" + opElegida).className =
      "nombre nombreNoAcertada";
    document.getElementById("l" + opElegida).className =
      "letra letraNoAcertada";
    document.getElementById("n" + correcta[posActual]).className =
      "nombre nombreAcertada";
    document.getElementById("l" + correcta[posActual]).className =
      "letra letraAcertada";
  }
  posActual++;
  setTimeout(cargarMaravilla, 1000); // Cargar la siguiente maravilla después de un segundo
}

// Función para terminar el juego y mostrar los resultados
function terminarJuego() {
  document.getElementById("pantalla-juego").style.display = "none";
  document.getElementById("pantalla-final").style.display = "block";
  document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
  document.getElementById("numIncorrectas").innerHTML =
    maravillas.length - cantidadAcertadas;
}

// Función para volver al inicio y reiniciar el juego
function volverAlInicio() {
  document.getElementById("pantalla-final").style.display = "none";
  document.getElementById("pantalla-inicial").style.display = "block";
  document.getElementById("pantalla-juego").style.display = "none";
}
