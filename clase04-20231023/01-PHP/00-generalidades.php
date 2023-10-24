<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Generalidades PHP (html...)</h2>

    <?php
        $nombre="Diego";
        echo "<h2 style='color:blue;'>Generalidades PHP (con PHP...)</h2>";
        echo "<h2 style='color:blue;'>Soy ".$nombre."...!!!</h2>";

        // comentario linea simple

        /*
        Comentarios
        multilinea...
        etc...
        */

    ?>

    <ul>
        <li>Home</li>
        <?="<li>Clientes</li>"?>
        <li>Info</li>
        <li>Datos</li>
        <?php
            echo "<li>Contacto</li>";
        ?>

    </ul>

    <!-- <p>Hola</p> -->


</body>
</html>