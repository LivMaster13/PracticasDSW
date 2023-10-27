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
  var promediosMaterias = {}; // Almacenar los promedios de cada materia.

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
    // Validar que las notas sean válidas y calcular los promedios de cada materia
    for (var i = 0; i < asignaturas.length; i++) {
      var notaField = document.getElementById("nota" + i);
      var nota = parseFloat(notaField.value);
      totalNotas += nota;

      // Calcular el promedio de cada materia
      promediosMaterias[asignaturas[i]] = nota;
    }

    var promedio = totalNotas / asignaturas.length;
    var mensaje = "Tu promedio final es: " + promedio.toFixed(2) + " - ";

    for (var materia in promediosMaterias) {
      mensaje +=
        "\nEn " + materia + " has sacado " + promediosMaterias[materia] + " - ";
    }

    if (promedio > 85) {
      mensaje += "Estás exento de ordinario en todas las materias.";
    } else {
      mensaje += "Debes presentar examen ordinario en todas las materias.";
    }

    alert(mensaje);
  } else {
    campoFaltante.focus(); // Selecciona el campo que falta llenar.
  }
}
