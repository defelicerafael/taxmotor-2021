<?php
$link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 
"https" : "http") . "://" . $_SERVER['HTTP_HOST'];
if($link =='http://localhost'){
  $link .= "/taxmotor/";
}else{
  $link .= "/";
}
?>