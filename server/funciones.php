<?php
function cmp($a, $b)
{
    if ($a["orden"] == $b["orden"]) {
        return 0;
    }
    return ($a["orden"] < $b["orden"]) ? -1 : 1;
}
?>