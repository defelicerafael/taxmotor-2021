<?php
$iconos[] = array(
    "img"=>"../img/seguridad/ICONO_QUE_NECESITAMOS.png",
    "nombre"=>"¿Qué información necesitamos? ",
    "desc"=>'
    <ul class="con-check lh-lg">
        <li>Información fiscal.</li>
        <li>Información personal.</li>
        <li>Datos de medios de pago.</li>
    </ul>'
);
$iconos[] = array(
    "img"=>"../img/seguridad/ICONO_PARA_QUE.png",
    "nombre"=>"Para qué usamos<br/>tus datos ",
    "desc"=>'
    <ul class="con-check lh-lg">
        <li>Lorem ipsum.</li>
        <li>Lorem ipsum.</li>
        <li>Lorem ipsum.</li>
    </ul>'
);
$iconos[] = array(
    "img"=>"../img/seguridad/ICONO_COMO_RECOGEMOS.png",
    "nombre"=>"Cómo recogemos<br/>tus datos",
    "desc"=>'
    <ul class="con-check lh-lg">
        <li>Lorem ipsum.</li>
        <li>Lorem ipsum.</li>
        <li>Lorem ipsum.</li>
    </ul>'
);
$iconos[] = array(
    "img"=>"../img/seguridad/ICONO_SEGURIDA.png",
    "nombre"=>"Cómo protegemos tus datos y tus claves",
    "desc"=>'
    <ul class="con-check lh-lg">
        <li>Lorem ipsum.</li>
        <li>Lorem ipsum.</li>
        <li>Lorem ipsum.</li>
    </ul>'
);
$iconos[] = array(
    "img"=>"../img/seguridad/ICONO_COMO_PROCESAMOS.png",
    "nombre"=>"Cómo procesamos tu informacion",
    "desc"=>'
    <ul class="con-check lh-lg">
        <li>Lorem ipsum.</li>
        <li>Lorem ipsum.</li>
        <li>Lorem ipsum.</li>
    </ul>'
);
$iconos[] = array(
    "img"=>"../img/seguridad/ICONO_TUS_DERECHOS.png",
    "nombre"=>"Tus derechos",
    "desc"=>'
    <ul class="con-check lh-lg">
        <li>Lorem ipsum.</li>
        <li>Lorem ipsum.</li>
        <li>Lorem ipsum.</li>
    </ul>'
);
$iconos[] = array(
    "img"=>"../img/seguridad/ICONO_NUESTRAS_POLITICAS.png",
    "nombre"=>"Nuestras Políticas",
    "desc"=>'
    <ul class="con-check lh-lg">
        <li>Privacidad.</li>
        <li>Propiedad.</li>
        <li>Protección.</li>
        <li>Transparencia.</li>
    </ul>'
);
?>


<div class="row g-0 align-items-center justify-content-center taxmotor-padding-1" id="quienes-1">
    <div class="col-md-6-12 col px-md-3 px-5 mt-2 mt-md-0">
        <h3 class="letra-tus-impuestos gris-oscuro">
            Tu seguridad<br/>
            <span class="secundario">Nuestra Prioridad</span>
        </h3>
        <p class="letra-seguridad-regular"> 
        Tus datos, tu información <b>son de tu propiedad.</b><br/>
        Cumplimos con las certificaciones más exigentes de seguridad de datos y transacciones. Sólo vos decidís quién puede ver tu información, cuando y cómo. 

        </p>
    </div>
    <div class="col-md-6 col-12">
        <img src="../img/home/01_Home_FOTO-TABLET.jpg" alt="" title="" class="w-75 mx-auto d-block">
    </div>
</div>

<div class="row g-0 taxmotor-padding" id="quienes-3">  
    <div class="row row-cols-2 row-cols-md-4 justify-content-center g-0 mt-md-5 mt-4 p-md-0 p-2">
        <?php
            foreach($iconos as $k=>$v){
        ?>
            <div class="col align-self-start mb-4 px-md-5 px-3 ">
                <img src="<?php echo $v['img'];?>" class="mx-auto d-block h-100" alt="...">
                <div class="pt-3">
                    <p class="gris-oscuro text-center letra-20-iconos">
                        <b><?php echo $v['nombre'];?></b>
                    </p>
                    <p class="text-start"><?php echo $v['desc'];?></p>
                </div>
               
            </div>
        <?php
        }
        ?>
        
    </div>     
</div>   