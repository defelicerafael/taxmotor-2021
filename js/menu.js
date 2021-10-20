 // ARCHIVOS //
    var menues = document.getElementById('menues');
    var templateMenu = '';
    
    var traerMenu = function() {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = function() {
            var json = JSON.parse(this.responseText);
            //console.log(json);
            for(x in json){
                templateMenu +=   '<a role="button" class="menu-item text-uppercase" onclick="traerFotos(\''+json[x].categoria+'\',0,9,3)">'+json[x].titulo+'</a>';
            }
            //console.log(templateFotos);
            menues.innerHTML = templateMenu;
        }
        xmlhttp.open("GET", "admin/server/traerCategorias.php?id=no");
        xmlhttp.send();
    }

    
    traerMenu();