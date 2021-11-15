<?php
// ARRAY PARA REDUCIR CÓDIGO
$botones = array(
    "¿Cómo funciona?",
    "Herramientas",
    "Precios y planes",
    "Garantías y seguridad",
    "Impuestos",
    "Beneficios"
);

$funciona[] = array(
    '¿Lorem ipsum dolor sit amet, consectetuer adipiscing elit?',
    'Respuesta pregunta...1'
);
$funciona[] = array(
    'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie',
    'Respuesta pregunta...2'
);
$funciona[] = array(
    'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie',
    'Respuesta pregunta...3'
);
$comunes[] = array(
    '¿Para qué me sirve taxmotor?',
    'Con taxmotor podes gestionar tus impuestos vos solo, fácil y al menor costo. No necesitas saber de contabilidad, no nuestras herramientas podés tener todo al día, bien hecho y sin pagar de más. No más sorpresas, con taxmotor tomás  el control de tus impuestos.'
);
$comunes[] = array(
    'Qué se puede hacer con las herramientas de taxmotor?',
    'Respuesta pregunta...5'
);
$comunes[] = array(
    '¿Quién vé mi información?',
    'Respuesta pregunta...6'
);
$comunes[] = array(
    '¿Es obligatorio tener un contador para hacer los impuestos?',
    'Respuesta pregunta...7'
);
$comunes[] = array(
    'Con mi contador pago menos impuestos. ¿Ustedes lo hacen?',
    'Respuesta pregunta...8'
);

?>
<div class="row g-0 align-items-center taxmotor-padding pt-md-5" id="plan">
    <div class="col-md-12 padding-planificacion text-left pb-md-5 pb-2 pt-md-1">
        <h3 class="letra-tus-impuestos gris-oscuro ">
            Preguntas frecuentes.
            <br/>
            <span class="secundario">
                Encontrá todas las respuestas:
            </span>
        </h3>
    </div>
    <div class="col-12 letra-25-medium">
        <div class="row row-cols-2 row-cols-md-3 g-5 poppins px-md-5 px-2">
            <?php 
                $ib = 0;
                foreach($botones as $b){
            ?>
                <div class="col align-self-center cards-alto-pf p-relative">
                    <img src="../img/planes/check.png" class="check-position-pf img-check-pf check-off" alt="...">
                    <div class="card h-100 shadow  border-0 card-pf nuevo-azul rounded" onclick="seleccion(<?php echo $ib;?>);">
                        <div class="card-body vertical-center">
                            <div class="card-title text-center"><?php echo $b;?></div>
                        </div>
                    </div>
                </div>
            <?php
                $ib++;
                }
            ?>
        </div>
    </div>
    <div class="col-12 w-100 mt-md-5 mt-2">
        <h4 class="secundario letra-24p mt-md-3 mt-1 p-2 p-md-0" id="pregunta"></h4>
        <div id="mostrar-preguntas">
            <?php
                $ic=0;
                foreach($funciona as $c){
            ?>  
                <div >
                    <a class="btn bg-blanco text-start w-100 p-md-3 my-2 p-2 rounded border-3 preguntaF" data-bs-toggle="collapse" href="#collapseFunciona-<?php echo $ic;?>" role="button" aria-expanded="false" aria-controls="collapseFunciona-<?php echo $ic;?>" onclick="cambiarflechaFrecuentes(<?php echo $ic;?>)">
                        <b><?php echo $c[0];?></b>
                        <span class="float-end">
                            <img class="flecha-frecuentes" src="../img/preguntas-frecuentes/flecha-abajo.png" alt="" title="">
                        </span>
                        <div class="collapse text-start bg-celeste-claro w-100 rounded border-3 mt-md-1" id="collapseFunciona-<?php echo $ic;?>">
                            <?php echo $c[1];?>
                        </div>
                    </a>
                     
                </div>    
                
            <?php
                $ic++;
                }
            ?>
        </div>
    </div> 
    <div class="col-12 w-100 mt-md-1 mt-3">
        <h4 class="secundario letra-24p my-md-4 my-1 p-2 p-md-0">Preguntas más comunes</h4>
        <?php
            $ic=0;
            foreach($comunes as $c){
                
        ?>  
            <div class="p-2 p-md-0">
                <a class="btn bg-blanco text-start w-100 p-md-3 my-2 p-2 rounded border-3 preguntaC" data-bs-toggle="collapse" href="#collapse-<?php echo $ic;?>" role="button" aria-expanded="false" aria-controls="collapse-<?php echo $ic;?>" onclick="cambiarflecha(<?php echo $ic;?>)">
                    <b><?php echo $c[0];?></b>
                    <span class="float-end">
                        <img class="flecha" src="../img/preguntas-frecuentes/flecha-abajo.png" alt="" title="">
                    </span>
                    <div class="collapse text-start bg-celeste-claro w-100 rounded border-3 mt-md-1" id="collapse-<?php echo $ic;?>">
                        <?php echo $c[1];?>
                    </div>
                </a>
                 
            </div>    
            
        <?php
            $ic++;
            }
        ?>
    </div>

</div>   
