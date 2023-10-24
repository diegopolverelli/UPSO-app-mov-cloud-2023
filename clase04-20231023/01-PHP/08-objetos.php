<?php

$objeto=new stdClass();
$objeto->prop1="valor 1";
$objeto->prop2=false;
$objeto->prop3=1000;

var_dump($objeto);

echo $objeto->prop1."<br>";

$heroe=new stdClass();
$heroe->nombre="Ironman";
$heroe->publisher="Marvel";
$heroe->{"secret code"}="abcd";

echo $heroe->nombre."<br>";
echo $heroe->{"secret code"}."<br>";

$jsontxt='{"id":1, "nombre":"Hulk", "publisher":"Marvel"}';
$heroe=json_decode($jsontxt);
var_dump($heroe);

class Persona{
    public $nombre="";
    public $apellido="";
    public $email="";

    public function __construct($nombre, $apellido, $email)
    {
        $this->nombre=$nombre;
        $this->apellido=$apellido;
        $this->email=$email;
    }

    public function saludar(){
        echo "Hola, soy ".$this->nombre."<br>";
    }

    public function setNombre($nombre){
        $this->nombre=$nombre;
    }

}

$persona=new Persona("Adriana","Varela","avarela@test.com");

var_dump($persona);
$persona->setNombre("Jimena");
$persona->saludar();

?>