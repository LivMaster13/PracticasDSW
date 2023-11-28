<?php
			$conexion = mysqli_connect("127.0.0.1", "root", "", "tour") or
			die("Problemas con la conexion");
			
			$nombre = $_POST['nombre'];
			$apellidos = $_POST['apellidos'];
			$edad = $_POST['edad'];
			$sexo = $_POST['sexo'];
			$ciudad = $_POST['ciudad'];
			$celular = $_POST['celular'];
			$transporte = $_POST['transporte'];
			$comentarios = $_POST['comentarios'];
			$camisa = $_POST['camisa'];
		

			mysqli_query($conexion,"update registros set nombre='$_REQUEST[nombre]',apellidos='$_REQUEST[apellidos]',edad='$_REQUEST[edad]',sexo='$_REQUEST[sexo]',
			ciudad='$_REQUEST[ciudad]',celular='$_REQUEST[celular]',transporte='$_REQUEST[transporte]',comentarios='$_REQUEST[comentarios]',camisa='$_REQUEST[camisa]',talla='$_REQUEST[talla]'
			where id='$_REQUEST[ide]'") or
			die("Problemas en el select:" .mysqli_error($conexion));
			
			$registros = mysqli_query($conexion,"select nombre,apellidos,edad,sexo,ciudad,celular,transporte,comentarios,camisa,talla 
			from registros where id='$_REQUEST[ide]'") or
			die("Problemas en el select:" .mysqli_error($conexion));
			
			if($reg = mysqli_fetch_array($registros)){
				echo "<script languaje='JavaScript'>
						alert('El actualizado ha sido modificado.');
						location.assign('../pages/admin/usuarios.php');
					</script>";
			} else {
				echo "<script languaje='JavaScript'>
						alert('No existe un registro con ese ID.');
						location.assign('../pages/admin/usuarios.php');
					</script>";
			}
			mysqli_close($conexion);	
?>