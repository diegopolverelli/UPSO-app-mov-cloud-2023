<?php

// $numeros=[1,2,3,4,5];
// echo "Segunda posicion del array: ".$numeros[1];
// echo "<br>";

// var_dump($_SERVER);
// echo $_SERVER["WINDIR"]."<br>";

var_dump($_GET);

var_dump($_POST);
// var_dump($_POST["nombre"]);



if(isset($_POST["nombre"])){
    if (is_string($_POST["nombre"]) && !preg_match("/[0-9]/",$_POST["nombre"])){
        header("Location:02-variablesSuperglobales.php?mensaje=Nombre correcto");
        exit();
    }else{
        header("Location:02-variablesSuperglobales.php?error=Ingrese un nombre válido");
        exit();
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Registro:</h2>
    <form action="02-variablesSuperglobales.php" method="post">

        <?php
            if(isset($_GET["error"])){
                echo "<div><strong style='color:red;'>".$_GET["error"]."</strong></div>";
            }
        ?>

        <?php if(isset($_GET["mensaje"])):?>

            <div>
                <strong style="color:green"><?=$_GET["mensaje"]?></strong>
            </div>

        <?php endif ?>


        <input type="text" name="nombre" placeholder="nombre">
        <input type="text" name="apellido" placeholder="apellido">
        <input type="submit" value="Aceptar">

    </form>
    
</body>
</html>