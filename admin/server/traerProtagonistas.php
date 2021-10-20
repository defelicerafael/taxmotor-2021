<?php
include_once 'class_sql.php';

$id = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_SPECIAL_CHARS);

$carpeta = 'protagonistas';
$sql = new Sql;
$columnas = $sql->showColumnNames($carpeta);


if ($id =="si") {
    $array = array('mostrar'=>'si');    
    $select = $sql->selectTablaNew($carpeta,$array,'date','DESC','99999');
    //echo "entre en si el ID esta vacio";
}else{
    if($id=="no"){
        $select = $sql->selectTablaNew($carpeta,'no','date','DESC','99999');
         //echo "entre en si el ID el igual a no";
    }else{
        
        if (is_numeric($id)){
            $array = array('id'=>$id);
            $select = $sql->selectTablaNew($carpeta,$array,'date','DESC','99999');
        }else{
            // echo "entre en si el ID tiene datos";
            $array = array('mostrar'=>'si','id'=>$id);  
            $select = $sql->selectTablaNew($carpeta,$array,'date','DESC','99999');
        }
    }
}

$contar = count($select);
for($i=0;$i<$contar;$i++){
    $select[$i]['texto'] = html_entity_decode($select[$i]['texto']);
}

$null = is_null($select);
if($null==true){
    echo "[]";
}else{
$sql->jsonConverter($select); 
}
