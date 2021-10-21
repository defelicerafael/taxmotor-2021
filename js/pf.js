// VARIABLES //
var checkImg = document.getElementsByClassName('img-check-pf');
var cardPlan = document.getElementsByClassName('card-pf');
var cuantosCards = cardPlan.length;
var flecha = document.getElementsByClassName('flecha');
var pregunta = document.getElementById('pregunta');
var cardTitle = document.getElementsByClassName('card-title');
var mostrarPreguntas = document.getElementById('mostrar-preguntas');

mostrarPreguntas.style.display="none";

function cambiarfecha(i){
    console.log(flecha[i].src);
    if(flecha[i].src==='http://localhost/taxmotor/img/preguntas-frecuentes/flecha-abajo.png'){
        flecha[i].src = 'http://localhost/taxmotor/img/preguntas-frecuentes/flecha-arriba.png'
    }else{
        flecha[i].src = 'http://localhost/taxmotor/img/preguntas-frecuentes/flecha-abajo.png';
    }
    
}

var arrayElecciones = [];

if(localStorage.getItem("preguntasF")){
    //alert("hay datos: "+localStorage.getItem("elecciones"));
    var arrayL = localStorage.getItem("preguntasF").split(",");
    for(x in arrayL){
        console.log(arrayL[x]);
        cardPlan[arrayL[x]].classList.toggle("check");
        checkImg[arrayL[x]].classList.toggle("check-off");
    }
}


for(var i = 0; i<cuantosCards;i++){
    cardPlan[i].style.cursor = 'pointer';
}


function seleccion(n){
    console.log((mostrarPreguntas.style.display));
    if(mostrarPreguntas.style.display==='none'){
        mostrarPreguntas.style.display='block';
    }
    pregunta.innerHTML = cardTitle[n].innerHTML;
    
    var i;
    for (i = 0; i < cardPlan.length; i++) {
        if(cardPlan[i].classList.contains('check')){
            cardPlan[i].classList.remove('check');
            checkImg[i].classList.add("check-off");
        }
    }
    cardPlan[n].classList.toggle("check");
    checkImg[n].classList.toggle("check-off");
}

function pasardeescena(n){
    if(n>0){
        return true;
    }else{
        alert("Seleccione una opción por favor...");
        return false;
    }
}

function cambiarTxt(i){

}