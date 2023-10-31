<?php
    include_once "conectar.php";

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
    <link rel="stylesheet" href="styles.css">
    <title>Login Usuarios:</title>
</head>
<body>
    <h2>Login Usuarios</h2>
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

        <input type="email" name="email" placeholder="correo electrónico" value="<?=$email?>">
        <input type="password" name="password" placeholder="contraseña"  value="<?=$password?>">

        <input type="submit" value="Login">
    </form>

    <!-- <?= "Hola...!!! <br>"?>
    <?php
        echo "Hola...!!! <br>";
    ?> -->

    <hr>
    <h3>Listado usuarios:</h3>
    <?php
    $query=mysqli_query($conexion, "SELECT * FROM usuarios");
    if($query){
        echo "<ul>";
        // $usuarios=[];
        while($usuario=mysqli_fetch_assoc($query)){
            // var_dump($usuario);
            echo "<li>".$usuario["nombre"]." - correo electrónico: <strong>".$usuario["email"]."</strong></li>";
        }
        echo "</ul>";

        mysqli_data_seek($query,0);
        $usuarios=mysqli_fetch_all($query, MYSQLI_ASSOC);
        // var_dump($usuarios);
        file_put_contents("usuarios.json",json_encode($usuarios, JSON_PRETTY_PRINT));
    }
    ?>

</body>
</html>