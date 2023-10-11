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

for (var i = 0; i < mesesDelAnio.length; i++) {
  alert(mesesDelAnio[i]);
}

// Agregar diciembre fuera del arreglo
var diciembre = "Diciembre";

// Utilizar un bucle for...of para mostrar los meses, incluyendo diciembre
alert(
  "Utilizando un bucle for...of para mostrar los meses, incluyendo diciembre:"
);

mesesDelAnio.push(diciembre); // Agregar diciembre al arreglo

for (var i = 0; i < mesesDelAnio.length; i++) {
  alert(mesesDelAnio[i]);
}

for (var mes of mesesDelAnio) {
  if (mes === "Julio") {
    continue; // Saltar la iteración si el mes es "Julio"
  }
  alert("Mes: " + mes);
}
