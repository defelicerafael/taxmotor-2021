<?php
include_once 'class_sql.php';

$sql = new Sql;
$columnas = $sql->showColumnNames('articulos');


$array = 'no';    
$select = $sql->selectTablaNew('articulos',$array,'nombre','ASC','99999');
$cantSelect = count($select);
$jsonStart = "[";
$jsonEnd = "]";

function encontrar($signo){
    $encontrar = substr($signo, 0,1);
    if($encontrar=="["){
        return true;
    }else{
        return false;
    }
}

for ($i=0; $i < $cantSelect; $i++) {
    if(($i<>0)&&($i<>$cantSelect)){
        $json .=",";
    }
    $select[$i]['img_home'] = '["'.$select[$i]['img_home'].'"]';
    $a = 0;
    $c[$i] = count($select[$i]);
    foreach ($select[$i] as $key => $value) {
       if($a == 0){
            $json .= '{"'.$key.'":"'.$value.'",';
       }
       else if($a == $c[$i]-1){
            $json .= '"'.$key.'":"'.$value.'"}';
       }
       else{
            if(encontrar($value)==false){
                $json .= '"'.$key.'":"'.$value.'",';
            }else{
            
                $json .= '"'.$key.'":'.$value.',';
            }
            
       }
       $a++;
    }
    
}

$jsonFinal = $jsonStart.$json.$jsonEnd;
//echo $jsonFinal;

$null = is_null($select);
if($null==true){
    echo "[]";
}else{
//$sql->jsonConverter($select); 
$fh = fopen("../../productos_nuevo.json", 'w') or die("Se produjo un error al crear el archivo");
fwrite($fh, $jsonFinal) or die("No se pudo escribir en el archivo");
fclose($fh);
echo "Se ha escrito sin problemas";
}


?>