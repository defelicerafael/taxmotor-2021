
    var vermas = document.getElementById("vermas");
    vermas.onclick = function(){
        if(vermas.innerHTML==='VER MÁS'){
            vermas.innerHTML = "VER MENOS";
        }else{
            vermas.innerHTML = "VER MÁS";
        }
    };
    function goBack() {
        window.history.back();
    }