<?php
$dir = array(
    "novias"=>"img/home/portfolio/novias/baja",
    "moda"=>"img/home/portfolio/moda",
    "trabajo"=>"img/home/portfolio/trabajo",
    "extras"=>"img/home/portfolio/extras"
);


// Open a directory, and read its contents
foreach($dir as $k1=>$v1){
    if (is_dir($v1)){   
        if ($dh = opendir($v1)){
            while (($file = readdir($dh)) !== false){
                if($file != "." && $file != ".."){
                    $direccion = str_replace("../", "", $v2);
                    $array_fotos[$k1][] = "img/home/portfolio/".$k1.$direccion."/".$file;
                }
            }
                closedir($dh);
            }
    }else{
            echo "No encontré la carpeta papu...";
    }
}
/*
echo "<pre>";
print_r($array_fotos);
echo "</pre>";
*/
//echo json_encode($fotos);
?>