<?php


$fotos_carousel[] = array(
    "category"=>"carousel-arriba",
    "img"=>"novias-1.jpg",
    "description"=>"",
    "price"=>"",
    "orden"=>"0",
    "elegida"=>"",
    "mostrar"=>"si"
);
$fotos_carousel[] = array(
    "category"=>"carousel-arriba",
    "img"=>"novias-2.jpg",
    "description"=>"",
    "price"=>"",
    "orden"=>"1",
    "elegida"=>"",
    "mostrar"=>"si"
);
foreach($fotos_carousel as $k){
    if($k['mostrar']=='si'){
        $array_carousel_arriba[] = $k;
    }
}
usort($array_carousel_arriba, "cmp");


?>