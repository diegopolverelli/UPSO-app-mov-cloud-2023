<?php
echo gettype(100)."<br>";
echo gettype(5.25)."<br>";
echo gettype("hola")."<br>";
echo gettype(true)."<br>";
echo gettype([100,2,3])."<br>";
echo gettype(array(1,2,3,4))."<br>";

$nombre="Julia";
echo "hola, me llamo ".$nombre."<br>";
echo 'hola, me llamo '.$nombre."<br>";
echo "hola, me llamo $nombre<br>";

var_dump($nombre);

$heroes=["Batman", "Superman", "Hulk"];
var_dump($heroes);

define("CODIGO","009-2728");
echo "El codigo es ".CODIGO;
echo "<br>";

echo __DIR__ ;
echo "<br>";
echo __LINE__ ;
echo "<br>";
echo __FILE__ ;
echo "<br>";
echo PHP_OS ;
echo "<br>";
echo PHP_INT_MAX ;
echo "<br>";
echo PHP_URL_PORT ;
echo "<br>";

?>

