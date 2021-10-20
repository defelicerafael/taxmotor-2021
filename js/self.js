    
    // VARIABLES //
    var selfimg = document.getElementById("selfimg");
    var selftext = document.getElementById("selftext");
   
    var cargando = '<div class="d-flex justify-content-center" style="height:400px;">'
                        +'<div class="spinner-grow text-secondary" role="status">'
                         +'<span class="visually-hidden">Loading...</span>'
                        +'</div>'
                    +'</div>';

    
    
    var bio = "admin/server/traerSelf.php";
    
    async function getTextSelf(file) {
      //  console.log(file);
        let myObject = await fetch(file);
        let myText = await myObject.json();
        //console.log(myText);
        selfimg.src = myText[0].img;
        selftext.innerHTML = myText[0].texto.replace(/\n/g, "<br/>");
    }

    getTextSelf(bio);
    