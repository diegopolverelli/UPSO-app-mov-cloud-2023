<?php
// echo "Página de proceso<br>";
include_once "conectar.php";

if(empty($_POST["email"]) || empty($_POST["password"])){
    // echo "Complete todos los datos...!!!<br>";
    header("Location:login.php?errores=".json_encode(["Complete todos los datos"])."&email=".$_POST["email"]."&password=".$_POST["password"]);
    exit();
}

$email=$_POST["email"];
$password=$_POST["password"];



$consulta="SELECT * FROM usuarios WHERE email='$email'";
$query=mysqli_query($conexion, $consulta);



if($query->num_rows===0){
    // header("Location:login.php?errores=".json_encode(["El usuario ".$email." no existe en la BD"])."&email=".$email."&password=".$password);
    header("Location:login.php?errores=".json_encode(["Error en las credenciales"])."&email=".$email."&password=".$password);
    exit();
}

$usuario=mysqli_fetch_assoc($query);
$valido=password_verify($password, $usuario["password"]);


if($valido){
    header("Location:login.php?mensaje=El usuario ".$email." se ha logueado correctamente...!!!");
    exit();
}else{
    header("Location:login.php?errores=".json_encode(["Error en las credenciales"])."&email=".$email."&password=".$password);
    exit();
}


?>