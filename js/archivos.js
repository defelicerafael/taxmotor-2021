 // ARCHIVOS //

    var archivos = document.getElementById('archivos');
    var masarchivos = document.getElementById('masarchivos');
    var mas_fotos = document.getElementById('mas_fotos');
    localStorage.setItem("limite",0);
    
    //console.log(mas_fotos);
    
    archivos.innerHTML ='<div class="spinner-border text-dark mx-auto d-block" role="status">'
                            +'<span class="visually-hidden">Loading...</span>'
                        +'</div>'; 
    
    var traerFotos = function(base,categoria,limite1,limite2,masonry) {
        //console.log(categoria,limite1,limite2,masonry);
        localStorage.setItem("limite",limite2);
        //console.log(localStorage.getItem("limite"));
        
        
        // RESETO TEMPLATES FOTOS //
        var templateFotos = '';
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = function() {
            var json = JSON.parse(this.responseText);
            //console.log(json);
            for(x in json){
                //console.log(x,json[x]);
                templateFotos += '<div class="mansonry_column" id="columna-'+x+'">'
                for(x2 in json[x]){
                    //console.log(x2,json[x][x2]);
                templateFotos +=    '<div class="foto-muestra">'
                                        +'<a href="#a" type="button" class="btn text-white rafuModal" data-bs-toggle="modal" data-bs-target="#exampleModal" data-rafu-index="'+json[x][x2].id+'" onclick="abrirElModal('+json[x][x2].id+')">'
                                            +'<img src="'+json[x][x2].img_baja+'" class="fadeIn" style="width:100%" alt="Mudar Historias - '+json[x][x2].titulo+'" title="Mudar Historias - '+json[x][x2].titulo+'">'
                                                +'<div class="overlay-r">'
                                                    +'<div class="text">'+json[x][x2].titulo+'</div>'
                                                +'</div>'
                                                +'<div class="overlay-l">'
                                                    +'<div class="text">'
                                                        +'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-aspect-ratio" viewBox="0 0 16 16">'
                                                            +'<path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"/>'
                                                            +'<path d="M2 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H3v2.5a.5.5 0 0 1-1 0v-3zm12 7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H13V8.5a.5.5 0 0 1 1 0v3z"/>'
                                                     +'</svg>'
                                                    +'</div>'
                                                +'</div>'
                                        +'</a>'
                                    +'</div>'    
                }
                templateFotos +='</div>';
            }
            //console.log(templateFotos);
            archivos.innerHTML = templateFotos;
        }
        xmlhttp.open("GET", "server/ver_mas_archivos.php?base="+base+"&categoria="+categoria+"&limite1="+limite1+"&limite2="+limite2+"&columnas="+masonry);
        xmlhttp.send();
        /*mas_fotos.onclick = function(){
            traerMasFotos(base,categoria,9,localStorage.getItem("limite"),3);
        };*/
    }

    

    // TRAER MAS FOTOS //
    var traerMasFotos = function(base,categoria,limite1,limite2,masonry) {
        //console.log(categoria,limite1,limite2,masonry);
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = function() {
            var json = JSON.parse(this.responseText);
            if(json.length>0){
                var suma = Number(limite2) + Number(localStorage.getItem("limite"));
                localStorage.setItem("limite",suma);
                for(x in json){
                    for(x2 in json[x]){
                    document.getElementById('columna-'+x).innerHTML +=' <div class="'+json[x][x2].categoria+'">'
                                                                            +'<a href="#a" type="button" class="btn text-white rafuModal" data-bs-toggle="modal" data-bs-target="#exampleModal" data-rafu-index="'+x2+'">'
                                                                                +'<img src="'+json[x][x2].img_home+'" class="fadeIn" style="width:100%" alt="Muestra Fotográfica - '+json[x][x2].titulo+'" title="Muestra Fotográfica - '+json[x][x2].titulo+'">'
                                                                            +'</a>'
                                                                        +'</div>'    
                    }
                }
            }else{
                return;
            }
        }
        
        xmlhttp.open("GET", "server/ver_mas_archivos.php?base="+base+"&categoria="+categoria+"&limite1="+limite1+"&limite2="+limite2+"&columnas="+masonry);
        xmlhttp.send();
    }

    traerFotos('imagenes','fotos',0,30,3);