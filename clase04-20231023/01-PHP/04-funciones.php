<?php

function enter(){
    echo "<br>";
}

echo "hola";
enter();
echo "hola";
enter();
echo "hola";
enter();

function suma($a, $b){
    return $a+$b;
}

echo suma(5,4);
enter();

$resta= function($a, $b){
    return $a-$b;
};

echo $resta(5,4);
enter();

$multiplica=fn($a, $b)=>$a*$b;

echo $multiplica(5,4);
enter();



?>