    //sessionStorage.setItem("limite",0);
    //console.log(sessionStorage.getItem("limite"));
    // VARIABLES //
    var fotobio = document.getElementById("fotobio");
    var textobio = document.getElementById("textobio");
   
    var cargando = '<div class="d-flex justify-content-center" style="height:400px;">'
                        +'<div class="spinner-grow text-secondary" role="status">'
                         +'<span class="visually-hidden">Loading...</span>'
                        +'</div>'
                    +'</div>';

    
    
    var bio = "admin/server/traerBio.php";
    
    async function getTextBio(file) {
      //  console.log(file);
        let myObject = await fetch(file);
        let myText = await myObject.json();
       // console.log(myText);
        fotobio.src = myText[0].img;
        textobio.innerHTML = myText[0].texto.replace(/\n/g, "<br/>");
    }

    getTextBio(bio);
    