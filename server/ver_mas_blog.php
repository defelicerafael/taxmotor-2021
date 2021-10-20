<?php

include_once '../admin/server/class_sql.php';

$limite1 = filter_input(INPUT_GET, 'limite1', FILTER_SANITIZE_SPECIAL_CHARS);
$limite2 = filter_input(INPUT_GET, 'limite2', FILTER_SANITIZE_SPECIAL_CHARS);

$sql = new Sql;
$columnas = $sql->showColumnNames('blog');
$array['mostrar'] = 'si';    
$select = $sql->selectTablaFromTo('blog',$array,'date','desc',$limite1,$limite2);
$null = is_null($select);

if($null==true){
    echo "[]";
}else{
    $sql->jsonConverter($select); 
}
?>