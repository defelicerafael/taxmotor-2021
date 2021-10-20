<?php
$blog[] = array(
    "category"=>"novias",
    "img"=>"img/home/novias/image00001.jpeg",
    "titulo"=>"Cuando maquille a María.",
    "subtitulo"=>"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    "texto"=>'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    "fecha"=>"",
    "mostrar"=>"si"
);
$blog[] = array(
    "category"=>"novias",
    "img"=>"img/home/novias/image00007.jpeg",
    "titulo"=>"Peinar, el arte de persuadir.",
    "subtitulo"=>"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    "texto"=>'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    "fecha"=>"",
    "mostrar"=>"si"
);


foreach($blog as $k){
    if($k['mostrar']=='si'){
        $array_blog[] = $k;
    }
}
usort($array_blog, "cmp");
//echo json_encode($array_fotos);
?>