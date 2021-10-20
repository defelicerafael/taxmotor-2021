<?php

include_once '../admin/server/class_sql.php';


$categoria = filter_input(INPUT_GET, 'categoria', FILTER_SANITIZE_SPECIAL_CHARS);
$limite = filter_input(INPUT_GET, 'limite', FILTER_SANITIZE_SPECIAL_CHARS);
$column = filter_input(INPUT_GET, 'columnas', FILTER_SANITIZE_SPECIAL_CHARS);
/*
$categoria = "novias";
$limite = 6;
$column = 3;
*/
if(!empty($limite)){
    $c = $limite;
}else{
    $c = 99999;
}

if(!empty($categoria)){
    $array['categoria'] = $categoria;
}else{
    $array =[];
}



$sql = new Sql;
$columnas = $sql->showColumnNames('imagenes');
$array['mostrar'] = 'si';    
$select = $sql->selectTablaNew('imagenes',$array,'orden','asc',$c);
$null = is_null($select);

if($null==true){
    echo "[]";
}else{
    $divido = count($select)/$column;
    
    //echo  $divido;
    
    $divididos = array_chunk($select, $divido, true);
    
    /*echo "<pre>"; 
    print_r($divididos);
    echo "</pre>";*/
    $sql->jsonConverter($divididos); 
}
?>