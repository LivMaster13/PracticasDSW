<!DOCTYPE html>
<html>
<head>
  <title>Usuarios</title>
  <link rel="stylesheet" type="text/css" href="../../css/styles.css">
  <link rel="stylesheet" type="text/css" href="./css/usuariosMod.css">
</head>
<body>
    <?php

        $conexion = mysqli_connect("127.0.0.1", "root", "", "tour") or
        die("Problemas con la conexion");

        $sql="select * from registros";

        $editable = mysqli_query($conexion,"select nombre,apellidos,edad,sexo,ciudad,celular,transporte,comentarios,camisa,talla 
        from registros where id='$_REQUEST[ide]'") or
        die("Problemas en el select:" .mysqli_error($conexion));

        $todos=mysqli_query($conexion,$sql)
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
            <hr/>
        <main>
        <h1 align="center" style="margin-bottom: 10rem; padding-top: 3.5rem">Registros</h1>
            <div class="glass-container" style="text-align:center;">
                <table align='center' style="margin-bottom:1rem;">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Edad</th>
                        <th>Sexo</th>
                        <th>Ciudad</th>
                        <th>Celular</th>
                        <th>Transporte</th>
                        <th>Comentarios</th>
                        <th>Camisa</th>
                        <th>Talla</th>
                        <th>Modificar</th>
                        <th>Borrar</th>
                        </tr>
                    </thead>
                    <tbody >
                    <?php
                    while ($registro = mysqli_fetch_assoc($todos)) {
                            if ($registro['id'] == $_REQUEST['ide']) {
                            ?>      
                                <form
                                    action='../../php/modificar.php?ide=<?php echo $registro['id']?>'
                                    method="POST"
                                    onsubmit="return validarDatos();"
                                    enctype="multipart/form-data"
                                    id="formulario"
                                >
                                    <tr>
                                        <td><?php echo $registro['id']?></td>
                                        <td><input id="nombre" name="nombre" style="width: 100px;" placeholder="<?php echo $registro['nombre'] ?>"></td>
                                        <td><input id="apellidos" name="apellidos" style="width: 100px;" placeholder="<?php echo $registro['apellidos'] ?>"></td>
                                        <td><input id="edad" name="edad" style="width: 100px;" placeholder="<?php echo $registro['edad'] ?>"></td>
                                        <td><select
                                            name="sexo"
                                            width="100px";
                                            required
                                            >
                                                <option selected>OTRO</option>
                                                <option>MASCULINO</option>
                                                <option>FEMENINO</option>
                                            </select>
                                        </td>
                                        <td><select
                                            name="ciudad"
                                            width="100px";
                                            required
                                            >
                                                <option>ENSENADA</option>
                                                <option selected>TIJUANA</option>
                                                <option>MEXICALI</option>
                                                <option>TECATE</option>
                                                <option>ROSARITO</option>
                                            </select>
                                        </td>
                                        <td><input name="celular" style="width: 100px;" placeholder="<?php echo $registro['celular'] ?>"></td>
                                        <td><select
                                            name="transporte"
                                            width="100px";
                                            required
                                            >
                                                <option selected>NO</option>
                                                <option>SI</option>
                                            </select>
                                        </td>
                                        <td><input id="comentarios" name="comentarios" style="width: 100px;" placeholder="<?php echo $registro['comentarios'] ?>"></td>
                                        <td><select
                                            name="camisa"
                                            width="100px";
                                            required
                                            >
                                                <option selected>NO</option>
                                                <option>SI</option>
                                            </select>
                                        </td>                                       
                                        <td><select
                                            name="talla"
                                            width="100px";
                                            required
                                            >
                                                <option selected>NINGUNA</option>
                                                <option>CHICA</option>
                                                <option>MEDIANA</option>
                                                <option>GRANDE</option>
                                            </select>
                                        </td>
                                        <td><a class='button-borrar' href='../../php/borrar.php?ide=<?php echo $registro['id'] ?>' onclick='return confirmar()'>Eliminar</a></td>
                                        <td><button type="submit" class='button-modificar-seguro' onclick='return modificar()'>Modificar</button></td>
                                    </tr>
                                </form>
                            <?php
                            } else {
                            ?>
                                <tr>
                                    <td><?php echo $registro['id']?></td>
                                    <td><?php echo $registro['nombre']?></td>
                                    <td><?php echo $registro['apellidos']?></td>
                                    <td><?php echo $registro['edad']?></td>
                                    <td><?php echo $registro['sexo']?></td>
                                    <td><?php echo $registro['ciudad']?></td>
                                    <td><?php echo $registro['celular']?></td>
                                    <td><?php echo $registro['transporte']?></td>
                                    <td><?php echo $registro['comentarios']?></td>
                                    <td><?php echo $registro['camisa']?></td>
                                    <td><?php echo $registro['talla']?></td>
                                    <td><?php echo "<a class='button-borrar' href='../../php/borrar.php?ide=".$registro['id']."' onclick='return confirmar()'>Eliminar</a>";?></td>
                                    <td><?php echo "<a class='button-modificar' href='usuariosMod.php?ide=".$registro['id']."'>Modificar</a>";?></td>
                                </tr>
                                <?php
                            }
                        }
                        ?>
                    </tbody >
                </table>
            </div>      
        </main>
            <hr/>
        <footer>
            <p>Copyright &copy; 2023</p>
            <p>Todos los derechos reservados @Antonio Lopez, @Karen Orozco</p>
        </footer>    
    <script type="text/javascript" src="../../js/script.js"></script>
</body>
</html>
