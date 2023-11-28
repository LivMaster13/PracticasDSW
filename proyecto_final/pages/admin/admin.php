<html>
<head>
 	<title>Iniciar sesion</title>
	<link rel="stylesheet" href="../../css/styles.css">
    <link rel="stylesheet" href="./css/admin.css">
</head>
<body align="center">
 <?php
	if (isset($_POST['login'])) {
		session_start();

		$name = $_REQUEST['name'];
		$clave = $_REQUEST['clave'];

		$conexion = mysqli_connect("127.0.0.1", "root", "", "tour") or die("Problemas con la conexión.");

		// Verificar si el nombre de usuario es 'ADMIN'
		if ($name !== 'ADMIN') {
			echo "<script language='JavaScript'>
					alert('No existe un admin con ese nombre.')
					location.assign('admin.php');
				</script>";
			mysqli_close($conexion);
			exit; // Salir del script después de redireccionar
		}

		$usuario = mysqli_query($conexion, "SELECT * FROM admin WHERE name='$name'");
		
		if ($columna = mysqli_fetch_array($usuario)) {
			$nombre = $columna['ADMIN'];
			$claveBD = $columna['clave'];

			if ($clave == $claveBD) {
				echo "<script language='JavaScript'>
						alert('Inicio correcto.')
					</script>";

				$_SESSION['ADMIN'] = $nombre;

				echo "<script language='JavaScript'>
							location.assign('usuarios.php');
						</script>";

				mysqli_close($conexion);
				exit; // Salir del script después de redireccionar
			} else {
				echo "<script language='JavaScript'>
						alert('Clave incorrecta, intenta de nuevo.')
						location.assign('admin.php');
					</script>";
				mysqli_close($conexion);
				exit; // Salir del script después de redireccionar
			}
		}

		// Si no se encuentra un 'admin' con ese nombre
		echo "<script language='JavaScript'>
				alert('No existe un admin con ese nombre.')
				location.assign('admin.php');
			</script>";
		mysqli_close($conexion);
		exit; // Salir del script después de redireccionar
	}
 ?>
  <header>
        <nav>
            <ul>
                <li><a href="../../index.html">Inicio</a></li>
                <li><a href="../../pages/historia/historia.html">Historia</a></li>
                <li><a href="../../pages/lugares/lugares.html">Lugares turisticos</a></li>
                <li><a href="../../pages/platillos/platillos.html">Platillos</a></li>
                <li><a href="../../pages/contacto/contacto.html">Contacto</a></li>
                <li><a href="../../pages/registro/registro.html">Registrarse</a></li>
                <li><a href="../../pages/admin/admin.php">Admin</a></li>
                <!--
                    Si es admin mostrar:
                    <li><a href="./pages/admin/datos_usuarios.html">Login</a></li>
                -->
            </ul>
        </nav>
    </header>
	<main>
	<h1 align="center" style="margin-bottom: 10rem; padding-top: 3.5rem">Iniciar sesion (Admin)</h1>
		<div class="glass-container">
			<form action="#" method="POST" onsubmit="return validarDatos();" enctype="multipart/form-data" id="login">
				<label>NOMBRE:</label>
				<input type="text" name="name" required>
				<label>CLAVE:</label>
				<input type="password" name="clave" required>

				<button type="submit" name="login">ENVIAR</button>
			</form>
		</div>
	</main>
    <footer>
        <p>Copyright &copy; 2023</p>
        <p>Todos los derechos reservados @Antonio Lopez, @Karen Orozco</p>
    </footer>
	<script type="text/javascript" src="../../js/script.js"></script>
</body>
</html>