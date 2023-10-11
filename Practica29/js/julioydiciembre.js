// Crear un arreglo con los primeros 11 meses del año
var mesesDelAnio = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
];

// Agregar diciembre fuera del arreglo
var diciembre = "Diciembre";

// Utilizar un bucle for...of para mostrar los meses, incluyendo diciembre
alert(
  "Utilizando un bucle for...of para mostrar los meses, incluyendo diciembre:"
);

mesesDelAnio.push(diciembre); // Agregar diciembre al arreglo

for (var mes of mesesDelAnio) {
  alert("Mes: " + mes);
}
