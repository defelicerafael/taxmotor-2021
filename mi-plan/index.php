<?php
ini_set('error_reporting', E_ALL);
error_reporting(-1);
header("Content-Type: text/html;charset=utf-8");
include_once '../server/link.php';
?>
<!DOCTYPE html>
<html lang="es">
    <head>
        <title>taxmotor - Plan a tu medida.</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" type="text/css" href="../lib/bootstrap/css/bootstrap.min.css" media="all">
        <link rel="stylesheet" type="text/css" href="../css/app.css" media="all">
        <!-- META DESCRIPTION -->
        <meta name="description" content="taxmotor - Plan a tu medida">
        
        <meta property="og:url"           content="https://taxmotor.com.ar" />
        <meta property="og:type"          content="website" />
        <meta property="og:title"         content="taxmotor" />
        <meta property="og:description"   content="Plan a tu medida." />
        <meta property="og:image"         content="https://taxmotor.com.ar/img/seo.jpg" />
    </head>
    <body>
        <div class="container-taxmotor">
          <header>
            <?php include_once "../templates/top-nav-secciones.php";?>
          </header>
          <section class="main bg-primario">  
            <?php include_once "../templates/tu-plan.php";?>
          </section>
          <footer class="footer-efect bg-primario">
                <?php include_once "../templates/empresas.php";?>
                <?php include_once "../templates/toma-el-control.php";?>
                <?php include_once "../templates/footer.php";?>    
          </footer>   
        </div>
        <!-- Option 1: Bootstrap Bundle with Popper -->
        <script src="../lib/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="../js/app.js"></script>

    </body>
</html>
