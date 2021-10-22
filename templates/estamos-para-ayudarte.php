<?php
$iconos[] = array(
    "img"=>"../img/ayudarte/ICONO_WAHTSAPP.png",
    "nombre"=>"Whatsapp",
    "desc"=>"Conectáte con nuestros expertos directamente en tu celular, muy fácil y rápido."
);
$iconos[] = array(
    "img"=>"../img/ayudarte/ICONO_EMAIL.png",
    "nombre"=>"E mail",
    "desc"=>"Envíanos tus consultas por correo electrónico, lo responderemos en menos de XXX hs."
);
$iconos[] = array(
    "img"=>"../img/ayudarte/ICONO_VIDEOLLAMADA.png",
    "nombre"=>"Videollamada",
    "desc"=>"i es necesario, agendamos un videochat con alguno de nuestros expertos."
);
$iconos[] = array(
    "img"=>"../img/ayudarte/ICONO_PREGUNTAS.png",
    "nombre"=>"Preguntas frecuentes",
    "desc"=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id auctor libero."
);
$iconos[] = array(
    "img"=>"../img/ayudarte/ICONO_ENGRANAJES.png",
    "nombre"=>"Como funciona Taxmotor",
    "desc"=>"Mirá qué fácil es llevar tus impuestos con nuestras herramientas exclusivas."
);
$iconos[] = array(
    "img"=>"../img/ayudarte/ICONO_SABE.png",
    "nombre"=>"Sabe de impuestos",
    "desc"=>"No necesitas saber de contabilidad para hacer tus impuestos. Encontra todo aquí."
);
?>


<div class="row g-0 align-items-center justify-content-center taxmotor-padding-1" id="quienes-1">
    <div class="col-md-6-12 col px-md-3 px-5 mt-2 mt-md-0">
        <h3 class="letra-tus-impuestos gris-oscuro">
            Estamos para<br/>
            ayudarte
        </h3>
        <p class="letra-20"> 
        Nuestros expertos certificados están disponibles para asistirte 
        personalmente cuando lo necesites. Contactanos de la forma que
        te resulte mas cómoda, vamos a estar felices de poder ayudarte.

        </p>
    </div>
    <div class="col-md-6 col-12">
        <img src="../img/03_Estamos-para-ayudarte_Foto.jpg" alt="" title="" class="w-50 mx-auto d-block">
    </div>
</div>

<div class="row g-0 taxmotor-padding" id="quienes-3">  
    <div class="row row-cols-2 row-cols-md-3 g-0 mt-md-5 mt-4 poppins p-md-0 p-2">
        <?php
            foreach($iconos as $k=>$v){
        ?>
            <div class="col align-self-center mb-4 px-md-5 px-3 ">
                <img src="<?php echo $v['img'];?>" class="mx-auto d-block" alt="...">
                <div class="card-title text-center pt-3">
                    <p>
                        <a href="<?php echo $v['link'];?>" alt="" class="gris-oscuro" style="text-decoration:none"> 
                            <?php echo $v['nombre'];?>
                        </a>    
                        <br/>
                        <span class="secundario"><?php echo $v['puesto'];?></span>
                    </p>
                    <p class="px-md-3 os-regular"><?php echo $v['desc'];?></p>
                </div>
               
            </div>
        <?php
        }
        ?>
        
    </div>     
</div>   