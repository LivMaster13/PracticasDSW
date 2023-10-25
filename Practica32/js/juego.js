// Definición de las imágenes de los animes y sus respuestas correctas
let animes = [
  "fate-zero.svg",
  "attack-on-titan.svg",
  "naruto.svg",
  "one-piece.svg",
  "death-note.svg",
  "fullmetal-alchemist.svg",
  "my-hero-academia.svg",
  "dragon-ball-z.svg",
  "one-punch-man.svg",
  "hunter-x-hunter.svg",
];
let correcta = [0, 1, 0, 1, 2, 3, 0, 2, 1, 3];

// Opciones de respuesta para cada anime
let opciones = [];
opciones.push(["Fate/Zero", "Attack on Titan", "Naruto", "Demon Slayer"]);

opciones.push([
  "Fullmetal Alchemist",
  "Attack on Titan",
  "Death Note",
  "One Punch Man",
]);
opciones.push(["Naruto", "One Piece", "Dragon Ball Z", "Pokemon"]);

opciones.push([
  "My Hero Academia",
  "One Piece",
  "Hunter x Hunter",
  "Sailor Moon",
]);
opciones.push(["One Punch Man", "Fate/Zero", "Death Note", "BAKI"]);
opciones.push([
  "Dragon Ball Z",
  "Attack on Titan",
  "BEASTARS",
  "Fullmetal Alchemist",
]);
opciones.push(["My Hero Academia", "Naruto", "Death Note", "SAO"]);

opciones.push([
  "Digimon",
  "One Punch Man",
  "Dragon Ball Z",
  "Fullmetal Alchemist",
]);
opciones.push(["Toradora", "One Punch Man", "Naruto", "Kakegurui"]);
opciones.push([
  "Steins Gate",
  "Fate/Zero",
  "My Hero Academia",
  "Hunter x Hunter",
]);

// Variables para el seguimiento del juego
let posActual = 0;
let cantidadAcertadas = 0;

// Función para iniciar el juego
function comenzarJuego() {
  posActual = 0;
  cantidadAcertadas = 0;
  document.getElementById("pantalla-inicial").style.display = "none";
  document.getElementById("pantalla-juego").style.display = "block";
  cargarAnime();
}

// Función para cargar la siguiente imagen de anime
function cargarAnime() {
  if (animes.length <= posActual) {
    terminarJuego();
  } else {
    limpiarOpciones();

    document.getElementById("imgAnime").src = "./img/" + animes[posActual];
    document.getElementById("n0").innerHTML = opciones[posActual][0];
    document.getElementById("n1").innerHTML = opciones[posActual][1];
    document.getElementById("n2").innerHTML = opciones[posActual][2];
    document.getElementById("n3").innerHTML = opciones[posActual][3];
  }
}

// Función para limpiar la apariencia de las opciones
function limpiarOpciones() {
  document.getElementById("n0").className = "nombre";
  document.getElementById("n1").className = "nombre";
  document.getElementById("n2").className = "nombre";
  document.getElementById("n3").className = "nombre";
  document.getElementById("l0").className = "letra";
  document.getElementById("l1").className = "letra";
  document.getElementById("l2").className = "letra";
  document.getElementById("l3").className = "letra";
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
  setTimeout(cargarAnime, 1000); // Cargar el siguiente anime después de un segundo
}

// Función para terminar el juego y mostrar los resultados
function terminarJuego() {
  document.getElementById("pantalla-juego").style.display = "none";
  document.getElementById("pantalla-final").style.display = "block";
  document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
  document.getElementById("numIncorrectas").innerHTML =
    animes.length - cantidadAcertadas;
}

// Función para volver al inicio y reiniciar el juego
function volverAlInicio() {
  document.getElementById("pantalla-final").style.display = "none";
  document.getElementById("pantalla-inicial").style.display = "block";
  document.getElementById("pantalla-juego").style.display = "none";
}
