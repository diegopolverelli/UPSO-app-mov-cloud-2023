<?php
try {
    $conexion=mysqli_connect("localhost","root","","cursoupso01");
    echo "BD conectada...!!!<br>";
} catch (\Throwable $th) {
    if(mysqli_connect_errno()){
        echo "Error al conectar a BD. Detalle: ".mysqli_connect_error()."<br>";
    }else{
        echo "Error desconocido al conectar a BD<br>";
    }
}

?>