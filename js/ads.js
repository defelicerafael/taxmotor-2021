var adspage = (function() {
    //sessionStorage.setItem("showads","yes");
    var pathname = window.location.pathname;
    console.log(pathname);
    if(pathname.length === 1){
        var base = "";
    }else{
        var base = "../"; 
    }


    var config = {};
    if (sessionStorage.showads) {
        config.mostrar = sessionStorage.getItem("showads");
      } else {
        sessionStorage.setItem("showads","no");
      }
    /* CONFIGURACION */
    config.mostrar = sessionStorage.getItem("showads"); //"yes";//
    config.ancho = "100%"; //ANCHO
    config.alto = "auto"; // ALTO
    config.time = 2000; // SEGUNDOS x 1000
    config.bgimgurl = "img/home/articulos/3.jpg"; // DIRECCION DE LA FOTO 
    config.link = "";
    config.container = document.getElementById('bg-img-ads');
    config.modal = new bootstrap.Modal(document.getElementById('adsModal'), {keyboard: false});
    config.href = document.getElementById('img-ads-link');

    console.log(config); 

    var showAds = function(){
        if(config.mostrar==='yes'){
            setTimeout(function(){
                config.href.href=config.link;
                config.container.src=config.bgimgurl;
                config.container.style.width=config.ancho;
                config.container.style.height=config.alto;
                config.modal.show();
            }, config.time);
            sessionStorage.setItem("showads","no");
        }
    }

    return{
        showads : function(){
            showAds();  
        }
    };
})();
adspage.showads();



