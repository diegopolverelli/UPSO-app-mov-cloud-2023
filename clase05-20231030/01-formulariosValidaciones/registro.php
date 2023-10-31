<?php
    if(isset($_GET["errores"])){
        $errores=json_decode($_GET["errores"]);
    }else{
        $errores=[];
    }

    if(isset($_GET["mensaje"])){
        $mensaje=$_GET["mensaje"];
    }else{
        $mensaje="";
    }

    if(isset($_GET["nombre"])){
        $nombre=$_GET["nombre"];
    }else{
        $nombre="";
    }

    if(isset($_GET["email"])){
        $email=$_GET["email"];
    }else{
        $email="";
    }

    if(isset($_GET["password"])){
        $password=$_GET["password"];
    }else{
        $password="";
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro Usuarios:</title>
</head>
<body>
    <h2>Registro Usuarios</h2>
    <form action="procesar.php" method="post">

        <?php if(count($errores)>0):?>
            <div>
                <ul>
                    <?php for($i=0; $i<count($errores); $i++):?>
                        <li><strong style="color:red;">  <?= $errores[$i] ?>  </strong></li>
                    <?php endfor ?>
                </ul>
            </div>
        <?php endif ?>


        <?php if(strlen($mensaje)>0):?>
            <div>
                <ul>
                    <li><strong style="color:green;">  <?= $mensaje ?>  </strong></li>
                </ul>
            </div>
        <?php endif ?>

        <input type="text" name="nombre" placeholder="ingrese su nombre" value="<?=$nombre?>">
        <input type="email" name="email" placeholder="correo electrónico" value="<?=$email?>">
        <input type="password" name="password" placeholder="contraseña"  value="<?=$password?>">

        <input type="submit" value="Registrar">
    </form>

    <!-- <?= "Hola...!!! <br>"?>
    <?php
        echo "Hola...!!! <br>";
    ?> -->

</body>
</html>