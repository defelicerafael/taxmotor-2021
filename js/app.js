
    // FOTOS 
    
    var images = [];
    function preload() {
        for (var i = 0; i < arguments.length; i++) {
            images[i] = new Image();
            images[i].src = preload.arguments[i];
        }
    }

   
    // VARIABLES //
   
    var rafuModal = document.getElementsByClassName("rafuModal");
    var carouselItem = document.getElementsByClassName("carousel-item segundo");
    var cerrarModal = document.getElementById("cerrarModal");
    
    /*for(x in rafuModal){
        rafuModal[x].onclick = function(){
            console.log(this.dataset.rafuIndex);
            console.log(carouselItem[this.dataset.rafuIndex]);
            if(carouselItem[this.dataset.rafuIndex].classList.contains('active')){
                console.log("ya es el activo");
            }else{
                carouselItem[this.dataset.rafuIndex].classList.add('active');
            }
        }
        
    }*/

    var abrirElModal = function(id){
        
        for(x in carouselItem){
            if(typeof carouselItem[x].dataset !=='undefined'){
                if((Number(carouselItem[x].dataset.carouselNumero) === id)){
                    //console.log("Este coincide con el id");
                    if(carouselItem[x].classList.contains('active')){
                    // console.log("ya es el activo");
                    }else{
                        carouselItem[x].classList.add('active');
                    }
                }else{
                   // console.log(id,carouselItem[x].dataset.carouselNumero);
                }
            }else{
                //console.log("Este esta undefined");
                //console.log(carouselItem[x]);
            }     
        }        
    }


    cerrarModal.onclick = function(){
        var carouselItem = document.getElementsByClassName("carousel-item segundo");
        console.log(carouselItem);
        for(x in carouselItem){
            if(carouselItem[x].classList.contains('active')){
                carouselItem[x].classList.remove('active');
            }
        } 
    }

    


