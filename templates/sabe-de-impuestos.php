<?php
$iconos[] = array(
    "img"=>"../img/sabe-de-impuestos/ICONO_PREGUNTAS.png",
    "nombre"=>"Preguntas frecuentes",
    "link"=>"../preguntas-frecuentes"
  );
$iconos[] = array(
    "img"=>"../img/sabe-de-impuestos/ICONO_HERRAMIENTAS.png",
    "nombre"=>"Herramientas Taxmotor",
    "link"=>"../herramientas"
   );
$iconos[] = array(
    "img"=>"../img/sabe-de-impuestos/ICONO_ARTICULOS.png",
    "nombre"=>"Artículos de impuestos",
    "link"=>"../sabe-de-impuestos"
   );


$articulos[] = array(
    "titulo"=>"Cómo saber que escala de monotributo te corresponde.",
    "info"=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id auctor libero. Donec non sem ligula. Sed arcu massa, mollis
    a enim id, placerat vestibulum mi. Nullam sagittis sapien at tempus blandit.",
    "tiempo"=>"5 minutos",
    "fecha"=>"10 sep. 2021"
);
$articulos[] = array(
    "titulo"=>"Cómo saber que escala de monotributo te corresponde.",
    "info"=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id auctor libero. Donec non sem ligula. Sed arcu massa, mollis
    a enim id, placerat vestibulum mi. Nullam sagittis sapien at tempus blandit.",
    "tiempo"=>"5 minutos",
    "fecha"=>"10 sep. 2021"
);
$articulos[] = array(
    "titulo"=>"Cómo saber que escala de monotributo te corresponde.",
    "info"=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id auctor libero. Donec non sem ligula. Sed arcu massa, mollis
    a enim id, placerat vestibulum mi. Nullam sagittis sapien at tempus blandit.",
    "tiempo"=>"5 minutos",
    "fecha"=>"10 sep. 2021"
);

?>


<div class="row g-0 align-items-center justify-content-center taxmotor-padding-1" id="quienes-1">
    <div class="col-12 px-md-3 px-5 mt-2 mt-md-0 text-center">
        <h3 class="letra-tus-impuestos secundario">
            Sabé de impuestos
        </h3>
        <p class="letra-mi-plan-regular"> 
            Con las herramientas de taxmotor cualquier persona o pyme puede administrar <br class="d-none d-sm-none d-md-block"/>
            sus impuestos sin necesidad de conocimientos de contabilidad. <br class="d-none d-sm-none d-md-block"/>
            Encontra todo lo necesario aquí.

        </p>
    </div>
</div>

<div class="row g-0 taxmotor-padding" id="quienes-3">  
    
    <div class="row row-cols-1 row-cols-md-3 justify-content-start g-0 mt-md-5 mt-4 poppins p-md-0 p-2">
        <?php
            foreach($iconos as $k=>$v){
        ?>
            <div class="col align-self-start mb-4 px-md-5 px-3 ">
                <img src="<?php echo $v['img'];?>" class="mx-auto d-block h-100" alt="...">
                <div class="pt-3">
                    <p class="gris-oscuro text-center letra-17">
                        <?php echo $v['nombre'];?>
                    </p>
                    <p class="os-regular text-start"><?php echo $v['desc'];?></p>
                </div>
               
            </div>
        <?php
        }
        ?>
    </div>     
</div>
<div class="row g-0 taxmotor-padding" id="quienes-3">
    <div class="col-12 px-md-0 px-2">
        <h3 class="letra-40px pb-md-2  ps-md-0 gris-oscuro">
            Artículos más leidos
        </h3>
        <?php
            foreach($articulos as $k=>$v){
        ?>
            <div class="col align-self-start mb-4 px-md-5 px-3 rounded border-3 bg-blanco p-md-2 p-2">
                <div class="pt-3">
                    <p class="gris-oscuro text-start letra-24p">
                        <?php echo $v['titulo'];?>
                    </p>
                    <p class="os-regular text-start"><?php echo $v['info'];?></p>
                    <p class="os-regular text-start secundario">
                        Tiempo de lectura estimado: <?php echo $v['tiempo'];?>
                        <br/>
                        <?php echo $v['fecha'];?>
                    </p>

                </div>
               
            </div>
        <?php
        }
        ?>
    </div>   