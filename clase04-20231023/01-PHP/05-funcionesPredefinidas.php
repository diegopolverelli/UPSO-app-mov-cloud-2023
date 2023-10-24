<?php

function enter(){
    echo "<br>";
}

date_default_timezone_set('America/Argentina/Buenos_Aires');
echo date(("d-m-y"));
enter();

echo date("H:i:s");
enter();

echo rand(20,30);
enter();
$numero=lcg_value();
echo $numero;
enter();
echo round($numero,2);
enter();

$numero=100;
echo is_int($numero);
enter();

$nombre="Juan Manuel";
echo strlen($nombre);
enter();
echo strrev($nombre);
enter();
// echo strrev("otro le travaladna");
enter();

?>