<?php
ini_set('error_reporting', E_ALL);
error_reporting(-1);
header("Content-Type: text/html;charset=utf-8");
include_once 'server/link.php';
?>
<!DOCTYPE html>
<html lang="es">
    <head>
        <title>taxmotor - Tus impuestos, muy fácil.</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" type="text/css" href="lib/bootstrap/css/bootstrap.min.css" media="all">
        <link rel="stylesheet" type="text/css" href="css/app.css" media="all">
        <link rel="stylesheet" type="text/css" href="css/lite-yt-embed.css" media="all">

        <!-- META DESCRIPTION -->
        <meta name="description" content="taxmotor">
        
        <meta property="og:url"           content="https://taxmotor.com.ar" />
        <meta property="og:type"          content="website" />
        <meta property="og:title"         content="taxmotor" />
        <meta property="og:description"   content="Tus impuestos, muy fácil." />
        <meta property="og:image"         content="<?php echo $link;?>img/seo.jpg" />
    </head>
    <body>
          <div class="container-taxmotor">  
            <?php include_once "templates/top-nav-comun.php";?>
            <div class="main bg-primario">  
              <?php include_once "templates/video.php";?>
              <?php include_once "templates/probalo.php";?>
              <?php include_once "templates/sin-dolor-de-cabeza.php";?>
              <?php include_once "templates/planificacion-fiscal.php";?>
              <?php include_once "templates/experto.php";?>
              <?php include_once "templates/tus-datos.php";?>
              <?php include_once "templates/empeza-a-gestionar.php";?>
              <?php include_once "templates/satisfaccion-garantizada.php";?>
              <?php include_once "templates/empresas.php";?>
              <?php include_once "templates/toma-el-control.php";?>
            </div>
            <div class="footer-efect bg-primario">
              <?php include_once "templates/footer.php";?>    
            </div>
          </div>
          <!-- ACA ESTA EL VIDEO -->
          <div class="modal fade" tabindex="-1" id="videoModal" aria-labelledby="videoModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header bg-negro border-0">
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body video-container">
                <lite-youtube class="responsive-iframe" videoid="Nx3yDm4zg3c"></lite-youtube>
                  <!--<iframe class="responsive-iframe" src="https://www.youtube.com/embed/Nx3yDm4zg3c" title="YouTube video player" frameborder="0" allow="clipboard-write; encrypted-media; gyroscope;" allowfullscreen></iframe>-->
                </div>
              </div>
            </div>
          </div>      
          
        <!-- Option 1: Bootstrap Bundle with Popper -->
        <script src="lib/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="js/lite-yt-embed.js"></script>

    </body>
</html>
