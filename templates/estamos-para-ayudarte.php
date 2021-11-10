<?php
$iconos[] = array(
    "img"=>"../img/03_Estamos-para-ayudarte_ICONO-WAHTSAPP.jpg",
    "nombre"=>"Whatsapp",
    "desc"=>"Contactate con nuestros expertos directamente en tu celular, muy fácil y rápido."
);
$iconos[] = array(
    "img"=>"../img/03_Estamos-para-ayudarte_ICONO-EMAIL.jpg",
    "nombre"=>"E mail",
    "desc"=>"Envíanos tus consultas por correo electrónico, lo responderemos en menos de XXX hs."
);
$iconos[] = array(
    "img"=>"../img/03_Estamos-para-ayudarte_ICONO-VIDEOLLAMADA.jpg",
    "nombre"=>"Videollamada",
    "desc"=>"Si es necesario, agendamos un videochat con alguno de nuestros expertos."
);
$iconos[] = array(
    "img"=>"../img/03_Estamos-para-ayudarte_ICONO-PREGUNTAS-2.jpg",
    "nombre"=>"Preguntas frecuentes",
    "desc"=>"Respuestas a las consultas más habituales de nuestros clientes."
);
$iconos[] = array(
    "img"=>"../img/03_Estamos-para-ayudarte_ICONO-ENGRANAJES-2.jpg",
    "nombre"=>"Como funciona Taxmotor",
    "desc"=>"Mirá qué fácil es llevar tus impuestos con nuestras herramientas exclusivas."
);
$iconos[] = array(
    "img"=>"../img/03_Estamos-para-ayudarte_ICONO-SABE-2.jpg",
    "nombre"=>"Sabé de impuestos",
    "desc"=>"No necesitás saber de contabilidad para hacer tus impuestos. Encontrá todo aquí."
);
?>
<div class="row g-0 align-items-center justify-content-center taxmotor-padding-1" id="quienes-1">
    <div class="col-md-6 col-12 px-md-0 px-5">
        <h3 class="letra-tus-impuestos gris-oscuro">
            Estamos para<br/>
            ayudarte
        </h3>
        <p class="letra-20-regular"> 
        Nuestros expertos certificados están disponibles para asistirte 
        personalmente cuando lo necesites. Contactanos de la forma que
        te resulte mas cómoda, vamos a estar felices de poder ayudarte.
        </p>
    </div>
    <div class="col-md-6 col-12 ps-md-4">
        <img width="347" height="439" src="../img/03_Estamos-para-ayudarte_Foto.jpg" alt="" title="" class="img-fluid mx-auto d-block">
    </div>
</div>

<div class="row g-0 taxmotor-padding-solo-ancho" id="quienes-3">  
    <div class="row row-cols-2 row-cols-md-3 g-0 mt-md-1 mt-4 poppins p-md-0 p-2">
        <?php
            foreach($iconos as $k=>$v){
        ?>
            <div class="col align-self-center mb-4 px-md-5 px-3 ">
                <img width="" height="" src="<?php echo $v['img'];?>" class="mx-auto d-block" alt="...">
                <div class="text-center">
                    <span class="gris-oscuro letra-20-iconos" style="text-decoration:none"><?php echo $v['nombre'];?></span>    
                    <p class="px-md-3 letra-16-iconos"><?php echo $v['desc'];?></p>
                </div>
            </div>
        <?php
        }
        ?>
        
    </div>     
</div>   