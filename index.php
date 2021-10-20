<?php
ini_set('error_reporting', E_ALL);
error_reporting(-1);
header("Content-Type: text/html;charset=utf-8");
?>
<!DOCTYPE html>
<html lang="es">
    <head>
        <title>taxmotor - Tus impuestos, muy fácil.</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" type="text/css" href="lib/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="css/app.css">
        <!-- META DESCRIPTION -->
        <meta name="description" content="taxmotor">
        
        <meta property="og:url"           content="https://taxmotor.com.ar" />
        <meta property="og:type"          content="website" />
        <meta property="og:title"         content="taxmotor" />
        <meta property="og:description"   content="Tus impuestos, muy fácil." />
        <meta property="og:image"         content="https://taxmotor.com.ar/img/seo.jpg" />
    </head>
    <body>
        <div class="container-taxmotor">
          <div class="bg-primario">
            <?php include_once "templates/top-nav-comun.php";?>
            <?php include_once "templates/video.php";?>
            <?php include_once "templates/probalo.php";?>
            <?php include_once "templates/top-nav-comun.php";?>    
            <?php include_once "templates/sin-dolor-de-cabeza.php";?>
            <?php include_once "templates/top-nav-comun.php";?>   
            <?php include_once "templates/planificacion-fiscal.php";?>
            <?php include_once "templates/experto.php";?>
            <?php include_once "templates/tus-datos.php";?>
            <?php include_once "templates/empeza-a-gestionar.php";?>
            <?php include_once "templates/satisfaccion-garantizada.php";?>
            <?php include_once "templates/empresas.php";?>
            <?php include_once "templates/toma-el-control.php";?>
          </div>
            <?php include_once "templates/footer.php";?>    
        </div>
        <!-- Option 1: Bootstrap Bundle with Popper -->
        <script src="lib/bootstrap/js/bootstrap.bundle.min.js"></script>
        
        
        <!--<script src="js/ads.js"></script>-->
        <!--<script src="js/app.js"></script>
        <script src="js/blog.js"></script
        <script src="js/bio.js"></script>
        <script src="js/media.js"></script>
        <script src="js/archivos.js"></script>
        <script src="js/protagonistas.js"></script>
        <script src="js/contact.js"></script>
        <script src="js/carousel.js"></script>
        <script src="js/menu.js"></script>-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script>
          /*----- FUNCION PARA MOVER HASTA EL MENU --------------*/
          $('body').on('click','a[href^="#"]',function(event){
            event.preventDefault();
            var target_offset = $(this.hash).offset() ? $(this.hash).offset().top : 0;
            //change this number to create the additional off set        
            var customoffset = 80;
            $('html, body').animate({scrollTop:target_offset - customoffset}, 500);
          });
        </script>
<style>

    </body>
</html>
