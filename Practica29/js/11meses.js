// Crear un arreglo con los primeros 11 meses del año
var mesesDelAnio = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
];

// Ejemplo con for...in
alert("Usando for...in:");
for (var index in mesesDelAnio) {
  alert("Mes " + index + ": " + mesesDelAnio[index]);
}

// Ejemplo con forEach
alert("Usando forEach:");
mesesDelAnio.forEach(function (mes, index) {
  alert("Mes " + index + ": " + mes);
});

// Ejemplo con for...of
alert("Usando for...of:");
for (var mes of mesesDelAnio) {
  alert("Mes: " + mes);
}
