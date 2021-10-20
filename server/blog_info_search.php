<?php
include_once 'blog_info.php';

$id = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_SPECIAL_CHARS);
echo json_encode($array_blog[$id], JSON_FORCE_OBJECT)
?>