// TARIFAS //
var mostrarFotos = document.getElementById('mostrarFotos');

fetch('templates/portfolio-back.php?lfotos=21')
  .then( response => {
    if(response.status == 200) {
      return response.text();
    } else {
      throw "Respuesta incorrecta del servidor" 
    }
  })
  .then( responseText => {
    let users = JSON.parse(responseText).results;
    console.log('Este es el objeto de usuarios', users);
  })
  .catch( err => {
    console.log(err);
  });