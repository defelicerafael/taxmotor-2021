// VARIABLES //

localStorage.setItem("elecciones", "");

var continuar = document.getElementById('continuar');
var volver = document.getElementById('volver');
var primera = document.getElementById('primera');
var segunda = document.getElementById('segunda');

var checkImg = document.getElementsByClassName('img-check');
var cardPlan = document.getElementsByClassName('card-plan');
var cuantosCards = cardPlan.length;

var arrayElecciones = [];

segunda.style.display = "none";

continuar.addEventListener("click",function(){
    var cuantos;
    var arrayL = localStorage.getItem("elecciones").split(",");
    console.log(arrayL);
    if(arrayL[0] ===''){
        cuantos = 0;
    }else{
        cuantos = arrayL.length;
    }
    if(pasardeescena(cuantos)){
        irescena(2);
    }
},false);
volver.addEventListener("click",function(){
    console.log("volver");
    irescena(1);
},false);

for(var i = 0; i<cuantosCards;i++){
    cardPlan[i].style.cursor = 'pointer';
}

function irescena(t){
    if(t===1){
        primera.style.display = 'inline-block';
        segunda.style.display = "none";
    }
    if(t===2){
        primera.style.display = 'none';
        segunda.style.display = "inline-block";
    }
}

function seleccion(n){
    cardPlan[n].classList.toggle("check");
    checkImg[n].classList.toggle("check-off");
    if(cardPlan[n].classList.contains("check")){
        arrayElecciones.push(n);
        //console.log(arrayElecciones);
        var texto = arrayElecciones.toString();
        localStorage.setItem("elecciones",texto)
        console.log(localStorage.getItem("elecciones"));
    }else{
        var index = arrayElecciones.indexOf(n);
        if (index > -1) {
            arrayElecciones.splice(index, 1);
         }
        var textotb = arrayElecciones.toString();
        localStorage.setItem("elecciones",textotb)
        console.log(localStorage.getItem("elecciones"));
    }
}

function pasardeescena(n){
    if(n>0){
        return true;
    }else{
        alert("Seleccione una opción por favor...");
        return false;
    }
}

