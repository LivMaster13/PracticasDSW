// Ejemplo if, fi else, else

var num = 8;
if (num < 10) {
  console.log("El numero es menor a 10");
} else if (num > 10) {
  console.log("El numero es mayor a 10");
} else {
  console.log("El numero es igual a 10");
}

//Ejemplo switch

var estacion = prompt("Escribe una estacion en minusculas:");

switch (estacion) {
  case "invierno":
    alert("Todo es frio.");
    break;

  case "primavera":
    alert("Se colorea el mundo.");
    break;

  case "verano":
    alert("Las noches se hacen largas.");
    break;

  case "otono":
    alert("Donde habia color ya no queda nada.");
    break;

  default:
    alert("Eso no es una estacion");
    break;
}
