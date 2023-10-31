<?php
echo "Página de proceso<br>";

if(empty($_POST["nombre"]) || empty($_POST["email"]) || empty($_POST["password"])){
    // echo "Complete todos los datos...!!!<br>";
    header("Location:registro.php?errores=".json_encode(["Complete todos los datos"])."&nombre=".$_POST["nombre"]."&email=".$_POST["email"]."&password=".$_POST["password"]);
    exit();
}

$nombre=$_POST["nombre"];
$email=$_POST["email"];
$password=$_POST["password"];

$errores=[];

// validaciones:
if(!is_string($nombre) || preg_match("/[0-9]/",$nombre)){
    array_push($errores, "Nombre inválido");
}

if(!is_string($email) 
|| !preg_match("/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/",$email)
|| !filter_var($email, FILTER_VALIDATE_EMAIL)){
    array_push($errores, "Email inválido");
}

if(strlen($password)<5){
    array_push($errores, "La clave tiene que tener un mínimo de 5 caracteres");
}

// var_dump($errores)
if(count($errores)>0){
    // echo "Existen errores:<br>";
    // echo "<ul>";

    // foreach ($errores as $key => $error) {
    //     echo "<li>".$error."</li>";
    // }
    // echo "</ul>";
    header("Location:registro.php?errores=".json_encode($errores)."&nombre=".$nombre."&email=".$email."&password=".$password);
    exit();
}

if(file_exists("usuarios.json")){
    $datosTexto=file_get_contents("usuarios.json");
    $usuarios=json_decode($datosTexto);
}else{
    $usuarios=[];
}

$existe=false;
foreach ($usuarios as $key => $usuario) {
    if($usuario->email===$email){
        $existe=true;
    }
}

if($existe){
    header("Location:registro.php?errores=".json_encode(["El usuario ".$email." ya existe en la BD"])."&nombre=".$nombre."&email=".$email."&password=".$password);
    exit();
}

$id=1;
if(count($usuarios)>0){
    $id=$usuarios[count($usuarios)-1]->id + 1; 
}

$nuevoUsuario=new stdClass();
$nuevoUsuario->id=$id;
$nuevoUsuario->nombre=$nombre;
$nuevoUsuario->email=$email;
$opciones = [
    'cost' => 12,
];
$nuevoUsuario->password=password_hash($password, PASSWORD_BCRYPT, $opciones);

// password_verify(string $password, string $hash): bool

// var_dump($nuevoUsuario)
array_push($usuarios, $nuevoUsuario);

$datosTexto=json_encode($usuarios, JSON_PRETTY_PRINT);
file_put_contents("usuarios.json", $datosTexto);

header("Location:registro.php?mensaje=El usuario ".$email." se ha registrado correctamente...!!!");
// exit();

?>