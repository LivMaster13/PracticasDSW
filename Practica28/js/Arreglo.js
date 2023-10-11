// Crear un arreglo de los días de la semana
var diasDeLaSemana = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

// Visualizar los días de la semana en un mensaje de alerta
function mostrarDias() {
  alert("Días de la semana: " + diasDeLaSemana.join(", "));
}

// Agregar un día a la semana
function agregarDia(dia) {
  diasDeLaSemana.push(dia);
  alert(dia + " ha sido agregado a la semana.");
}

// Eliminar un día de la semana
function eliminarDia(dia) {
  var index = diasDeLaSemana.indexOf(dia);
  if (index !== -1) {
    diasDeLaSemana.splice(index, 1);
    alert(dia + " ha sido eliminado de la semana.");
  } else {
    alert(dia + " no se encuentra en la semana.");
  }
}

// Ejemplos de uso
mostrarDias();
agregarDia("Sábado");
eliminarDia("Miércoles");

// Mostrar los días actualizados
mostrarDias();
