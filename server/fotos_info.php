<?php

$fotos[] = array(
    "category"=>"novias",
    "img"=>"FN-BODA-1-1100x733.jpg",
    "description"=>"nat córdoba estilista make up artist",
    "price"=>"",
    "orden"=>"1",
    "elegida"=>"",
    "mostrar"=>"si"
);
$fotos[] = array(
    "category"=>"novias",
    "img"=>"image00012.jpeg",
    "description"=>"",
    "price"=>"",
    "orden"=>"2",
    "elegida"=>"",
    "mostrar"=>"si"
);
$fotos[] = array(
    "category"=>"novias",
    "img"=>"image00007.jpeg",
    "description"=>"",
    "price"=>"",
    "orden"=>"3",
    "elegida"=>"",
    "mostrar"=>"si"
);
$fotos[] = array(
    "category"=>"novias",
    "img"=>"image00078.jpeg",
    "description"=>"",
    "price"=>"",
    "orden"=>"4",
    "elegida"=>"",
    "mostrar"=>"si"
);
$fotos[] = array(
    "category"=>"novias",
    "img"=>"image00005.jpeg",
    "description"=>"",
    "price"=>"",
    "orden"=>"5",
    "elegida"=>"",
    "mostrar"=>"si"
);
$fotos[] = array(
    "category"=>"novias",
    "img"=>"image00085.jpeg",
    "description"=>"",
    "price"=>"",
    "orden"=>"6",
    "elegida"=>"",
    "mostrar"=>"si"
);
$fotos[] = array(
    "category"=>"novias",
    "img"=>"image00079.jpeg",
    "description"=>"",
    "price"=>"",
    "orden"=>"7",
    "elegida"=>"",
    "mostrar"=>"si"
);
$fotos[] = array(
    "category"=>"novias",
    "img"=>"image00102.jpeg",
    "description"=>"",
    "price"=>"",
    "orden"=>"8",
    "elegida"=>"",
    "mostrar"=>"si"
);
$fotos[] = array(
    "category"=>"novias",
    "img"=>"image00074.jpeg",
    "description"=>"",
    "price"=>"",
    "orden"=>"9",
    "elegida"=>"",
    "mostrar"=>"si"
);
$fotos[] = array(
    "category"=>"novias",
    "img"=>"image00006.jpeg",
    "description"=>"",
    "price"=>"",
    "orden"=>"10",
    "elegida"=>"",
    "mostrar"=>"si"
);
$fotos[] = array(
    "category"=>"novias",
    "img"=>"image00086.jpeg",
    "description"=>"",
    "price"=>"",
    "orden"=>"11",
    "elegida"=>"",
    "mostrar"=>"si"
);
$fotos[] = array(
    "category"=>"novias",
    "img"=>"image00099.jpeg",
    "description"=>"",
    "price"=>"",
    "orden"=>"12",
    "elegida"=>"",
    "mostrar"=>"si"
);







foreach($fotos as $k){
    if($k['mostrar']=='si'){
        $array_fotos[] = $k;
    }
}
usort($array_fotos, "cmp");

//echo json_encode($array_fotos);
?>