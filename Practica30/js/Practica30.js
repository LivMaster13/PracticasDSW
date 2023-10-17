function parImpar(numero) {
  var mensaje = numero % 2 === 0 ? "El numero es par" : "El numero es impar";
  alert(mensaje);
}

function avisoDeHuracan(hayUnHuracan) {
  var mensaje = hayUnHuracan ? "Hay un huracan" : "Esta soleado";
  alert(mensaje);
}

function operacionMatematicas(operacion, a, b) {
  var resultado;

  switch (operacion) {
    case "suma":
      resultado = a + b;
      break;
    case "resta":
      resultado = a - b;
      break;
    case "multiplicacion":
      resultado = a * b;
      break;
    case "division":
      resultado = a / b;
      break;
    case "residuo":
      resultado = a % b;
      break;
    default:
      resultado = 0;
      break;
  }

  alert(resultado);
}

var numero = prompt("Ingrese un numero");
parImpar(numero);

avisoDeHuracan(true);
avisoDeHuracan(false);

operacionMatematicas("suma", 4, 6);
operacionMatematicas("resta", 4, 6);
operacionMatematicas("multiplicacion", 5, 3);
operacionMatematicas("division", 10, 2);
operacionMatematicas("residuo", 4, 6);
operacionMatematicas("error", 2, 3);
