    // VARIABLES //
    var blogTitulo = document.getElementById("blog-titulo");
    var blogSubTitulo = document.getElementById("blog-subitulo");
    var blogTexto = document.getElementById("blog-texto");
    var blogImg = document.getElementById("blog-img");
    var blogAudio = document.getElementById("blog-audio");
    var protagonistaA =  document.getElementById("protagonista-anterior");
    var protagonistaS = document.getElementById("protagonista-siguiente");
    
    var cargando = '<div class="d-flex justify-content-center" style="height:400px;">'
                        +'<div class="spinner-grow text-secondary" role="status">'
                         +'<span class="visually-hidden">Loading...</span>'
                        +'</div>'
                    +'</div>';

    var restartAnimation = function(id,animation){
        element = document.getElementById(id);
        element.classList.remove(animation);
        void element.offsetWidth;
        element.classList.add(animation);
    }   
// ARCHIVOS //

    var protagonistas = document.getElementById('protagonistas');
    //var masarchivos = document.getElementById('masarchivos');
    //var mas_fotos = document.getElementById('mas_fotos');
    localStorage.setItem("limite",0);
    
    //console.log(mas_fotos);
    
    archivos.innerHTML ='<div class="spinner-border text-dark mx-auto d-block" role="status">'
                            +'<span class="visually-hidden">Loading...</span>'
                        +'</div>'; 
    
    var traerFotosSinCategorias = function(base,limite1,limite2,masonry) {
        //console.log(categoria,limite1,limite2,masonry);
        localStorage.setItem("limite",limite2);
        //console.log(localStorage.getItem("limite"));
        
        
        // RESETO TEMPLATES FOTOS //
        var templateFotosp = '';
        var iconoMic = '';
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = function() {
            var json = JSON.parse(this.responseText);
            //console.log(json);
            for(x in json){
                //console.log(x,json[x]);
                templateFotosp += '<div class="mansonry_column" id="columna-protagonistas'+x+'">'
                for(x2 in json[x]){
                    if(json[x][x2].link===''){
                        //console.log("el mic esta vacio");
                        iconoMic =  '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-mic-mute-fill" viewBox="0 0 16 16">'
                                        +'<path d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4.02 4.02 0 0 0 12 8V7a.5.5 0 0 1 1 0v1zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a4.973 4.973 0 0 1-2.43.923V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 1 0v1a4 4 0 0 0 4 4zm3-9v4.879L5.158 2.037A3.001 3.001 0 0 1 11 3z"/>'
                                        +'<path d="M9.486 10.607 5 6.12V8a3 3 0 0 0 4.486 2.607zm-7.84-9.253 12 12 .708-.708-12-12-.708.708z"/>'
                                    +'</svg>';
                    }else{
                        //console.log("el mic esta lleno");
                        iconoMic =  '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-mic-fill" viewBox="0 0 16 16">'
                                        +'<path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"/>'
                                        +'<path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>'
                                    +'</svg>';
                    }

                    //console.log(x2,json[x][x2]);
            templateFotosp +=       '<div class="foto-muestra">'
                                        +'<div  onclick="getText('+json[x][x2]['id']+')" class="btn text-white rafuModal" data-bs-toggle="modal" href="#Blog-1" role="button" aria-controls="Blog-1" alt="'+json[x][x2]['titulo']+'" title="'+json[x][x2]['titulo']+'">'
                                            +'<img src="'+json[x][x2].img+'" class="fadeIn" style="width:100%" alt="Mudar Historias - '+json[x][x2].titulo+'" title="Mudar Historias - '+json[x][x2].titulo+'">'
                                            +'<div class="overlay-r green">'
                                                +'<div class="row g-0 align-items-center justify-content-center">'
                                                    +'<div class="col-3 p-2">'
                                                       +iconoMic
                                                    +'</div>'
                                                    +'<div class="col-6 p-2">'
                                                        +'<div class="text-center">'+json[x][x2].titulo+'</div>'
                                                    +'</div>'
                                                    +'<div class="col-3 p-2">'
                                                        +' <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16">'
                                                        +'<path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>'
                                                        +'<path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>'
                                                        +'</svg>'
                                                    +'</div>'
                                                +'</div>'
                                            +'</div>'
                                        +'</div>'
                                    +'</div>'    
                }
                templateFotosp +='</div>';
            }
            //console.log(templateFotos);
            protagonistas.innerHTML = templateFotosp;
        }
        xmlhttp.open("GET", "server/ver_mas_archivos_sin_categoria.php?base="+base+"&limite1="+limite1+"&limite2="+limite2+"&columnas="+masonry);
        xmlhttp.send();
        /*mas_fotos.onclick = function(){
            traerMasFotos(base,categoria,9,localStorage.getItem("limite"),3);
        };*/
    }
    async function getText(id) {
        
        blogTitulo.innerHTML =  cargando;
        blogSubTitulo.innerHTML =  cargando;
        blogTexto.innerHTML =  cargando;
        blogImg.innerHTML =  cargando;
        blogAudio.innerHTML = cargando;
        var file = "admin/server/traerProtagonistas.php?id="+id;
        let myObject = await fetch(file);
        let myText = await myObject.json();
        console.log(myText);
        blogTitulo.innerHTML = myText[0].titulo;
        blogSubTitulo.innerHTML = myText[0].subtitulo;
        blogTexto.innerHTML = myText[0].texto.replace(/\n/g, "<br/>");;
        blogImg.src = myText[0].img;
        blogAudio.src = myText[0].link;
        
        
        
        protagonistaA.onclick = function(){
            var anterior = id-1;   
            if(anterior===0){
                id = 16;
                getText(id-1);
            }else{
                getText(id-1);
            }
            
        }; 
        protagonistaS.onclick = function(){
            var siguiente = id+1;
            if(siguiente===16){
                id = 0;
                getText(id+1);
            }else{
                getText(id+1);
            }
            
        };
           
            
        
        
    }
    

    // TRAER MAS FOTOS //
   /* var traerMasFotosProtagonistas = function(base,limite1,limite2,masonry) {
        //console.log(categoria,limite1,limite2,masonry);
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = function() {
            var json = JSON.parse(this.responseText);
            if(json.length>0){
                var suma = Number(limite2) + Number(localStorage.getItem("limite"));
                localStorage.setItem("limite",suma);
                for(x in json){
                    for(x2 in json[x]){
                    document.getElementById('columna-protagonistas-'+x).innerHTML +=' <div class="">'
                                                                            +'<a href="#a" type="button" class="btn text-white rafuModal" data-bs-toggle="modal" data-bs-target="#exampleModal" data-rafu-index="'+x2+'">'
                                                                                +'<img src="'+json[x][x2].img_home+'" class="fadeIn" style="width:100%" alt="Mudar Historias - protagonistas -'+json[x].titulo+' " title="Mudar Historias - protagonistas -'+json[x].titulo+'">'
                                                                            +'</a>'
                                                                        +'</div>'    
                    }
                }
            }else{
                return;
            }
        }
        
        xmlhttp.open("GET", "server/ver_mas_archivos_sin_categoria.php?base="+base+"&limite1="+limite1+"&columnas="+masonry+"&limite2="+limite2);
        xmlhttp.send();
    }*/

    traerFotosSinCategorias('protagonistas',0,15,3);