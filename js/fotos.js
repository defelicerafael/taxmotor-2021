// TARIFAS //
var mostrarFotos = document.getElementById('mostrarFotos');

async function fotos(limite,categoria) {
    var index = 0;
    var file = "server/carpetas_json.php";
    let myObject = await fetch(file);
    let myJson = await myObject.json();
    //console.log(myJson);
    for(x in myJson){
        console.log(x);
        console.log(categoria);
        if(x===categoria){
            console.log("es igual");
            for(x2 in myJson[x]){
                if(x2<limite){
                    templateFotos += templateFotosStart
                                    +'<div class="card border border-0  pointer '+x+' img-filter">'
                                        +'<a href="#a" type="button" class="btn text-white rafuModal" data-bs-toggle="modal" data-bs-target="#exampleModal" data-rafu-index="'+index+'">'
                                            +'<img width="1280" height="850"  preserveAspectRatio="xMidYMid slice" src="'+myJson[x][x2]+'" class="fadeIn img-full" alt="Nat Cordoba '+x+'" title="Nat Cordoba '+x+'">'
                                        +'</a>'
                                    +'</div>'
                                    +templateFotosEnd;
                    index++;
                }    
            }
        }else{
           console.log("No es igual");
        }
    }
    mostrarFotos.innerHTML = '<div class="row" data-masonry=\'{"percentPosition": true }\'>'+templateFotos+'</div>';
}
setTimeout(function(){
    fotos(21,'novias');
}, 1000);
setTimeout(function(){
    filterSelection("novias");
}, 1500);

