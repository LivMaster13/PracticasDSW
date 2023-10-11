var numero = 5;
var factorial = 1;

do {
  factorial *= numero; // Multiplicamos el factorial por el valor actual de numero
  numero--;
} while (numero > 0);

alert("El factorial de 5 es: " + factorial);
