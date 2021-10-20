<?php
include_once 'admin/server/class_sql.php';

$sql = new Sql;
$columnas = $sql->showColumnNames('imagenes');
$array['mostrar'] = 'si';    
$select = $sql->selectTablaNew('imagenes',$array,'orden','ASC',9999);
$null = is_null($select);
/*
echo "<pre>";
print_r($select);
echo "</pre>";
*/

?>