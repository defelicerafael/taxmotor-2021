<?php
include_once 'class_sql.php';

$id = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_SPECIAL_CHARS);

$sql = new Sql;
$columnas = $sql->showColumnNames('imagenes');

if ($id =="si") {
    $array = array('mostrar'=>'si');    
    $select = $sql->selectTablaNew('imagenes',$array,'orden','ASC','99999');
    //echo "entre en si el ID esta vacio";
}else{
    if($id=="no"){
        $select = $sql->selectTablaNew('imagenes','no','orden','ASC','99999');
         //echo "entre en si el ID el igual a no";
    }else{
        
        if (is_numeric($id)){
            $array = array('id'=>$id);
            $select = $sql->selectTablaNew('imagenes',$array,'orden','ASC','99999');
        }else{
            // echo "entre en si el ID tiene datos";
            $array = array('mostrar'=>'si','id'=>$id);  
            $select = $sql->selectTablaNew('imagenes',$array,'orden','ASC','99999');
        }
    }
}

//print_r($select);

$null = is_null($select);
if($null==true){
    echo "[]";
}else{
$sql->jsonConverter($select); 
}
