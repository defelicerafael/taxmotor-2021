// VARIABLES //
var checkImg = document.getElementsByClassName('img-check-pf');
var cardPlan = document.getElementsByClassName('card-pf');
var cuantosCards = cardPlan.length;
var flecha = document.getElementsByClassName('flecha');
var flechaF = document.getElementsByClassName('flecha-frecuentes');
var pregunta = document.getElementById('pregunta');
var cardTitle = document.getElementsByClassName('card-title');
var mostrarPreguntas = document.getElementById('mostrar-preguntas');
var preguntaC = document.getElementsByClassName('preguntaC');
var preguntaF = document.getElementsByClassName('preguntaF');

mostrarPreguntas.style.display="none";

function cambiarflecha(i){
    //console.log(flecha[i].src);
    var lastFive = flecha[i].src.substr(flecha[i].src.length - 5);
    console.log(lastFive);
    if(lastFive==='o.png'){
        console.log("es");
        flecha[i].src = '../img/preguntas-frecuentes/flecha-arriba.png'
        preguntaC[i].classList.add('bg-celeste-claro');
    }else{
        console.log("no es");
        flecha[i].src = '../img/preguntas-frecuentes/flecha-abajo.png';
        preguntaC[i].classList.remove('bg-celeste-claro');
    }
}

function cambiarflechaFrecuentes(i){
    //console.log(flecha[i].src);
    var lastFive = flechaF[i].src.substr(flechaF[i].src.length - 5);
    console.log(lastFive);
    if(lastFive==='o.png'){
        console.log("es");
        flechaF[i].src = '../img/preguntas-frecuentes/flecha-arriba.png'
        preguntaF[i].classList.add('bg-celeste-claro');
    }else{
        console.log("no es");
        flechaF[i].src = '../img/preguntas-frecuentes/flecha-abajo.png';
        preguntaF[i].classList.remove('bg-celeste-claro');
    }
}

var arrayElecciones = [];

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

