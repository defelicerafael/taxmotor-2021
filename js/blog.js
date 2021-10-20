    //sessionStorage.setItem("limite",0);
    //console.log(sessionStorage.getItem("limite"));
    // VARIABLES //
    var blogTitulo = document.getElementById("blog-titulo");
    var blogSubTitulo = document.getElementById("blog-subitulo");
    var blogTexto = document.getElementById("blog-texto");
    var blogImg = document.getElementById("blog-img");
    var bloginfo = document.getElementsByClassName("blog");
    var totalBlog =   bloginfo.length;  
    var buscandoblog = document.getElementById('buscandoblog');
    var menos_blog = document.getElementById('menos_blog');
    var mas_blog = document.getElementById('mas_blog');
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


    mas_blog.onclick = function(){
        //console.log("limite:"+sessionStorage.getItem("limite"));
        if(Number(sessionStorage.getItem("limite"))===0){
            console.log("esta en cero");
            return
        }else{
            restartAnimation('buscandoblog','fadeInNew');
            buscandoblog.innerHTML =  cargando;
            var limitemenosdos = Number(sessionStorage.getItem("limite"))-2;
            sessionStorage.setItem("limite",limitemenosdos);
            traerBlog(Number(sessionStorage.getItem("limite")),2);
           // console.log("limite menos 2:"+sessionStorage.getItem("limite"));
        }
          
    };
    menos_blog.onclick = function(){
           // console.log("Entra Limite:"+sessionStorage.getItem("limite"));
            restartAnimation('buscandoblog','fadeInNew');
            traerBlog(sessionStorage.getItem("limite"),2);
            var limitemasdos = Number(sessionStorage.getItem("limite"))+2;
            buscandoblog.innerHTML =  cargando;
            sessionStorage.setItem("limite",limitemasdos);
           // console.log("Sale Limite:"+sessionStorage.getItem("limite"));
    };
    
    
    
    async function getText(id) {
        blogTitulo.innerHTML =  cargando;
        blogSubTitulo.innerHTML =  cargando;
        blogTexto.innerHTML =  cargando;
        blogImg.innerHTML =  cargando;
        var file = "admin/server/traerBlog.php?id="+id;
        let myObject = await fetch(file);
        let myText = await myObject.json();
        //console.log(myText);
        blogTitulo.innerHTML = myText[0].titulo;
        blogSubTitulo.innerHTML = myText[0].subtitulo;
        blogTexto.innerHTML = myText[0].texto.replace(/\n/g, "<br/>");;
        blogImg.src = myText[0].img;
    }


    var traerBlog = function(limite1,limite2) {
        //console.log(categoria,limite1,limite2,masonry);
        sessionStorage.setItem("limite",limite2);
        //console.log("Limite:"+sessionStorage.getItem("limite"));
        // RESETO TEMPLATES FOTOS //
        var templateBlog = '';
        const xmlhttp = new XMLHttpRequest();
            xmlhttp.onload = function() {
                var json = JSON.parse(this.responseText);
                //console.log(json);
                if(json.length === 0){
                    console.log("nada");
                    return;
                }else{
                   /* if((json.length === 1)||(json.length === 2)){
                        menos_blog.style.display ="none"; 
                        mas_blog.style.display="none"; 
                    }*/
                   
                    for(x in json){
                        var texto_reducido = '';
                        //console.log(json[x]['img']);
                        if(typeof json[x] !=='undefined'){
                        //console.log(json[x]['texto']);
                        json[x]['texto'] = json[x]['texto'].replace(/\n/g, "<br/>");
                        //console.log(json[x]['texto']);
                        texto_reducido = json[x]['texto'].substr(0,300);
                        texto_reducido +="...";
                        templateBlog += '<a onclick="getText('+json[x]['id']+')" class="text-decoration-none text-body blog" data-bs-toggle="modal" href="#Blog-1" role="button" aria-controls="Blog-1" alt="'+json[x]['titulo']+'" title="'+json[x]['titulo']+'">'
                                                +'<div class="card mb-3">'
                                                    +'<div class="row g-0">'
                                                        +'<div class="col-md-4">'
                                                            +'<img src="'+json[x]['img']+'" class="img-fluid rounded-start" alt="'+json[x]['titulo']+'">'
                                                        +'</div>'
                                                        +'<div class="col-md-8">'
                                                            +'<div class="card-body">'
                                                                +'<h5 class="card-title">'+json[x]['titulo']+'</h5>'
                                                                +'<p class="card-text">'+texto_reducido+'</p>'
                                                            +'</div>'
                                                        +'</div>'
                                                    +'</div>'
                                                +'</div>'
                                            +'</a>'  
                        }
                    }
               
                //console.log(templateFotos);
                buscandoblog.innerHTML = templateBlog;
                }
            }
        xmlhttp.open("GET", "server/ver_mas_blog.php?&limite1="+limite1+"&limite2="+limite2);
        xmlhttp.send();
        //console.log(sessionStorage.getItem("limite"));
    }

    traerBlog(0,2);