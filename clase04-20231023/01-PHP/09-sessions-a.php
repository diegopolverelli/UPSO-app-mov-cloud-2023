<?php

session_start();
if(isset($_SESSION["contador"])){
    $_SESSION["contador"]++;
}else{
    $_SESSION["contador"]=1;
}
$nombre='Juan';

?>

<a href="09-sessions-b.php">pagina 2</a>