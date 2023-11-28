<?php
			$conexion = mysqli_connect("127.0.0.1", "root", "", "tour") or
			die("Problemas con la conexion");
			
			mysqli_query($conexion,"delete from registros
			where id='$_REQUEST[ide]'") or
			die("Problemas en el select:" .mysqli_error($conexion));
			
			$registros = mysqli_query($conexion,"select nombre,apellidos,edad,sexo,ciudad,celular,transporte,comentarios,camisa,talla 
			from registros where id='$_REQUEST[ide]'") or
			die("Problemas en el select:" .mysqli_error($conexion));
			
			if($reg = mysqli_fetch_array($registros)){
				echo "<script languaje='JavaScript'>
						alert('El registro no pudo ser eliminado.');
						location.assign('../pages/admin/usuarios.php');
                	</script>";
			} else {
				echo "<script languaje='JavaScript'>
						alert('El registro ha sido borrado.');
						location.assign('../pages/admin/usuarios.php');
					</script>";
			}
			mysqli_close($conexion);	
?>