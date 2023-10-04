var valores = [true, 10, false, "codigo", "herramientas", 7];

// Determinar el elemento de texto mayor
var resultadoMayor;
if (valores[3] > valores[4]) {
  resultadoMayor = valores[3];
} else {
  resultadoMayor = valores[4];
}
alert("El elemento de texto mayor es: " + resultadoMayor);

// Realizar las operaciones lógicas
var resultadoTrue = valores[0] != valores[2];
var resultadoFalse = valores[0] == valores[2];
alert("Resultado True: " + resultadoTrue);
alert("Resultado False: " + resultadoFalse);

// Realizar operaciones matemáticas
var num1 = valores[1];
var num2 = valores[5];

var suma = num1 + num2;
var resta = num1 - num2;
var multiplicacion = num1 * num2;
var division = num1 / num2;
var modulo = num1 % num2;

alert("Suma: " + suma);
alert("Resta: " + resta);
alert("Multiplicación: " + multiplicacion);
alert("División: " + division);
alert("Módulo: " + modulo);
