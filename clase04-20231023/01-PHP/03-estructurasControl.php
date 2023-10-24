<?php

$numero=10;
if($numero>=20){
    echo "mas de 20<br>";
}elseif($numero<20 && $numero>=10){
    echo "entre 10 y 19<br>";
}else{
    echo "menor a 10<br>";
}

for($numero=1;$numero<=10;$numero++){
    echo $numero."<br>";
}
echo "<hr>";

while($numero<=20){
    echo $numero."<br>";
    $numero++;
}

?>