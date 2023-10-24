<?php

$nombres=array("Juan", "Martina", "Ana");
var_dump($nombres);
var_dump(count($nombres));

array_push($nombres,"Martin", "Julieta");
var_dump($nombres);
var_dump(count($nombres));

$heroes=["Batman","Hulk", "Ironman"];
var_dump($heroes);

foreach ($heroes as $indice => $heroe) {
    $orden=$indice + 1;
    echo $orden.") ".$heroe."<br>";
}

$heroe=array_shift($heroes);
var_dump($heroe);

$heroe=array_unshift($heroes, "StarLord");
var_dump($heroes);

for($i=0;$i<count($heroes);$i++){
    $orden=$i + 1;
    echo $orden.") ".$heroes[$i]."<br>";
}

$persona=[
    "nombre"=>"Juan",
    "apellido"=>"Lopez",
    "edad"=>32
];

$persona1=[
    "nombre"=>"Amanda",
    "apellido"=>"Lopez",
    "edad"=>32
];

$persona2=[
    "nombre"=>"José",
    "apellido"=>"Lopez",
    "edad"=>32
];
var_dump($persona);
echo $persona["apellido"]."<br>";

$personas=[];
array_push($personas, $persona);
array_push($personas, $persona1);
array_push($personas, $persona2);
echo $personas[1]["nombre"];

var_dump($personas);

// array_shift($heroes)

?>