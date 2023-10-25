function calcularPromedio() {
  var totalNotas = 0;
  var asignaturas = [
    "Programacion Visual",
    "Python",
    "Administracion de Proyectos",
    "Diseño de sitios web",
    "Emprendedores",
    "Administracion de la Funcion Informatica",
    "Implantacion de software",
    "Taller de lectura y redaccion en ingles",
  ];

  var form = document.getElementById("calificacion-form");
  var todasLasNotasIngresadas = true; // Bandera para verificar si todas las notas están ingresadas.
  var campoFaltante = null; // Para rastrear el campo que falta llenar.

  // Validar que todos los campos estén llenados y que solo se ingresen números
  for (var i = 0; i < asignaturas.length; i++) {
    var notaField = document.getElementById("nota" + i);
    var notaValue = notaField.value.trim();
    var isNumeric = !isNaN(notaValue) && isFinite(notaValue); // Verifica si es un número.

    if (notaValue === "" || !isNumeric) {
      alert("Por favor, llena todos los campos de notas con números válidos.");
      notaField.focus(); // Selecciona el campo que falta llenar.
      todasLasNotasIngresadas = false;
      campoFaltante = notaField; // Rastrea el campo que falta llenar.
      break;
    }
  }

  if (todasLasNotasIngresadas) {
    // Validar que las notas sean válidas y calcular el promedio
    for (var i = 0; i < asignaturas.length; i++) {
      var notaField = document.getElementById("nota" + i);
      var nota = parseFloat(notaField.value);

      totalNotas += nota;
    }

    var promedio = totalNotas / asignaturas.length;

    if (promedio > 85) {
      alert(
        "Felicidades, tu promedio final es: " +
          promedio.toFixed(2) +
          " - Estás exento de ordinario:D."
      );
    } else {
      alert(
        "Tu promedio final es: " +
          promedio.toFixed(2) +
          " - Debes presentar examen ordinario:()."
      );
    }
  } else {
    campoFaltante.focus(); // Selecciona el campo que falta llenar.
  }
}
