<?php
ini_set('error_reporting', E_ALL);
error_reporting(-1);
header("Content-Type: text/html;charset=utf-8");
include_once '../server/link.php';
?>
<!DOCTYPE html>
<html lang="es">
    <head>
        <title>taxmotor - Estamos para ayudarte.</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" type="text/css" href="../lib/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="../css/app.css">
        <!-- META DESCRIPTION -->
        <meta name="description" content="taxmotor - Estamos para ayudarte">
        
        <meta property="og:url"           content="https://taxmotor.com.ar" />
        <meta property="og:type"          content="website" />
        <meta property="og:title"         content="taxmotor" />
        <meta property="og:description"   content="Estamos para ayudarte." />
        <meta property="og:image"         content="https://taxmotor.com.ar/img/seo.jpg" />
    </head>
    <body>
        <div class="container-taxmotor">
          <div class="bg-primario">
            <?php include_once "../templates/top-nav-secciones.php";?>
            <?php include_once "../templates/estamos-para-ayudarte.php";?>
          </div>
            <?php include_once "../templates/footer.php";?>    
        </div>
        <!-- Option 1: Bootstrap Bundle with Popper -->
        <script src="../lib/bootstrap/js/bootstrap.bundle.min.js"></script>
      </body>
</html>
