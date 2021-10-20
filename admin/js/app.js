angular.module('App', ['ngMaterial', 'ngMessages','config','Header','ngAnimate','ngSanitize','Login','ngCookies','textAngular','SqlServices','upload_icon'])

    .factory("pasapalabra", function() {
        return {
          data: []
        };
      }) 
    
    
.controller('Ctrl', function($http,$location,$cookies,SqlEdit,$mdToast,SqlDelete,$route,SqlInsertArray,$routeParams,$mdDialog,$timeout,$scope) {

    var app = this;
    
    app.articulos = [];
    app.articulosL = app.articulos.length;
    app.envios = [];
    app.enviosL = app.envios.length;
    app.categoriasItem = [];
    app.articulosL = app.categoriasItem.length;
    app.idArt= $routeParams.idArt;
    app.dir_img = "../../../img/home/articulos/";
    
    app.isEditing = false;
    app.colores = [];
    app.modelos = [];
    app.categorias = [];
    app.medidas = [];
    app.talles = [];
    app.tamanios = [];
    app.stock = [];
    app.total = []; 
    app.login = $cookies.get('log');
    app.apodo = $cookies.get('apodo');
   // console.log(app.login);

   app.protagonistas = [];
   app.protagonistasL = app.protagonistas.length;
   
   app.bio = [];
   app.bioL = app.bio.length;

   app.self = [];
   app.selfL = app.self.length;
   
   app.carousel = [];
   app.carouselL = app.carousel.length;


    
    app.showSimpleToast = function(text) {
            $mdToast.show(
            $mdToast.simple()
            .textContent(text)
            .position('bottom right' )
            .hideDelay(3000)
        );
    };
    
    //FOTOS DEL DIRECTORIO //
    app.showDirectoryNew = function (dir){
        //console.log(app.dir_img);
        $http({method: 'POST',url: 'directives/uploader/server/directories_new.php',data:{dir:dir}})
        .then(function successCallback(response) {
            app.fotosDirectorio = response.data;
            console.log(app.fotosDirectorio);
        }, function errorCallback(response) {
            app.fotosDirectorio = response.data;
            console.log(app.fotosDirectorio);
        });
};
    //Mostrar fotos
    app.showDirectory = function (){
            console.log(app.dir_img);
            $http({method: 'POST',url: 'directives/uploader/server/directories.php',data:{dir:app.dir_img}})
            .then(function successCallback(response) {
                app.fotosDirectorio = response.data;
                console.log(app.fotosDirectorio);
            }, function errorCallback(response) {
                app.fotosDirectorio = response.data;
                console.log(app.fotosDirectorio);
            });
    };
    app.showDirectoryCarousel = function (){
        //console.log(app.dir_img);
        $http({method: 'POST',url: 'directives/uploader/server/directoriesCarousel.php',data:{dir:app.dir_img}})
        .then(function successCallback(response) {
            app.fotosDirectorio = response.data;
            //console.log(app.fotosDirectorio);
        }, function errorCallback(response) {
            app.fotosDirectorio = response.data;
            //console.log(app.fotosDirectorio);
        });
};  
    
    app.showAlert = function(ev,textSi,text) {
                $mdDialog.show(
                  $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title(textSi)
                    .textContent(text)
                    .ariaLabel('')
                    .ok('Ok, Gracias')
                    .targetEvent(ev)

                );
            };
    
    //Borrar fotos
    app.deleteFoto = function (foto){
        var r = confirm("Esta seguro que desea ELIMINAR esta FOTO?");
            if(r===true){
              $http.post('directives/uploader/server/borrarFoto.php',{foto:foto})
              .then(function(data){
              app.borrarError = data;
            //  console.log(data);
              $route.reload();
              });
            }
        };
    
    app.EditLink = function (datosi,tablai,idi,ev){
            console.log(datosi,tablai,idi,ev);
            app.isEditing=true;
            var where = 'id';
            var datos = datosi;
            var link = 'server/editLink.php';
            var tabla = tablai;
            var id = idi;
            SqlEdit.async(link,datos,tabla,id,where).then(function(d){
                 app.showAlert(ev,'NOTIFICACI\u00D3N',d);
                 app.isEditing = false;
                 $timeout(function() {
                    $scope.$apply(function() {
                    window.history.back();
                    });
                }, 2000);
                
                
            });
        };

        app.EditarCaousel = function (fotos,idi,ev){
            //console.log(fotos,id);
            app.isEditing=true;
            var where = 'id';
            var datos = fotos;
            var link = 'server/editCarousel.php';
            var tabla = 'articulos';
            var id = idi;
            SqlEdit.async(link,datos,tabla,id,where).then(function(d){
                 app.showAlert(ev,'NOTIFICACI\u00D3N',d);
                 app.isEditing = false;
                 $timeout(function() {
                    $scope.$apply(function() {
                        window.history.back();
                    });
                }, 2000);
                
                
            });
        };    
    // FIN FUNCIONES DEL DIRECTORIO //
    
    app.traerArticulos = function(c){
     // console.log(c);
    app.loadingMostrarTodo = true;
        $http({method: 'GET',url: 'server/traerArticulos.php?id='+c})
                .then(function successCallback(response) {
                    app.articulos = response.data;
                    app.articulosL = app.articulos.length;
                    app.status = response.status;
                    app.loadingMostrarTodo = false;
                   // console.log(app.articulos);
                }, function errorCallback(response) {
                    app.articulos = response.data;
                    app.status = response.status;
                    app.loadingMostrarTodo = false;
                   //console.log(indu.sliders);
        });
    };
    
    app.traerProtagonistas = function(c){
   // console.log(c);
       app.loadingMostrarTodo = true;
           $http({method: 'GET',url: 'server/traerProtagonistas.php?id='+c})
                   .then(function successCallback(response) {
                       app.protagonistas = response.data;
                       app.protagonistasL = app.protagonistas.length;
                       app.status = response.status;
                       app.loadingMostrarTodo = false;
                       // console.log(app.protagonistas);
                   }, function errorCallback(response) {
                       app.protagonistas = response.data;
                       app.status = response.status;
                       app.loadingMostrarTodo = false;
                      // console.log(app.protagonistas);
           });
       };

       app.traerBio = function(){
        // console.log(c);
            app.loadingMostrarTodo = true;
                $http({method: 'GET',url: 'server/traerBio.php'})
                        .then(function successCallback(response) {
                            app.bio = response.data;
                            app.bioL = app.bio.length;
                            app.status = response.status;
                            app.loadingMostrarTodo = false;
                            console.log(app.bio);
                        }, function errorCallback(response) {
                            app.bio = response.data;
                            app.status = response.status;
                            app.loadingMostrarTodo = false;
                           //console.log(indu.sliders);
                });
            };

        app.traerSelf = function(){
        // console.log(c);
            app.loadingMostrarTodo = true;
                $http({method: 'GET',url: 'server/traerSelf.php'})
                        .then(function successCallback(response) {
                            app.self = response.data;
                            app.selfL = app.self.length;
                            app.status = response.status;
                            app.loadingMostrarTodo = false;
                            //console.log(app.self);
                        }, function errorCallback(response) {
                            app.self = response.data;
                            app.status = response.status;
                            app.loadingMostrarTodo = false;
                            //console.log(indu.sliders);
                });
        };     

        

       app.traerCarousel = function(c){
        //console.log(c);
           app.loadingMostrarTodo = true;
               $http({method: 'GET',url: 'server/traerCarousel.php?id='+c})
                       .then(function successCallback(response) {
                           app.carousel = response.data;
                           app.carouselL = app.carousel.length;
                           app.status = response.status;
                           app.loadingMostrarTodo = false;
                           // console.log(app.carousel);
                       }, function errorCallback(response) {
                           app.carousel = response.data;
                           app.status = response.status;
                           app.loadingMostrarTodo = false;
                          //console.log(indu.sliders);
               });
           };   


    app.traerCategorias = function(c){
        //console.log(c);
    app.loadingMostrarTodo = true;
        $http({method: 'GET',url: 'server/traerCategorias.php?id='+c})
                .then(function successCallback(response) {
                    app.categorias = response.data;
                    app.categoriasL = app.categorias.length;
                    app.status = response.status;
                    app.loadingMostrarTodo = false;
                   // console.log(app.categorias);
                }, function errorCallback(response) {
                    app.categorias = response.data;
                    app.status = response.status;
                    app.loadingMostrarTodo = false;
                   //console.log(indu.sliders);
        });
    };
    
    app.traerCategoriasItem = function(c){
      //  console.log(c);
    app.loadingMostrarTodo = true;
        $http({method: 'GET',url: 'server/traerCategoriasItem.php?id='+c})
                .then(function successCallback(response) {
                    app.categoriasItem = response.data;
                    app.coloresL = app.categoriasItem.length;
                    app.status = response.status;
                    app.loadingMostrarTodo = false;
                   // console.log(app.colores);
                }, function errorCallback(response) {
                    app.categoriasItem = response.data;
                    app.status = response.status;
                    app.loadingMostrarTodo = false;
                   //console.log(indu.sliders);
        });
    };

    app.traerMedidas = function(c){
        //console.log(c);
    app.loadingMostrarTodo = true;
        $http({method: 'GET',url: 'server/traerMedidas.php?id='+c})
                .then(function successCallback(response) {
                    app.medidas = response.data;
                    app.medidasL = app.medidas.length;
                    app.status = response.status;
                    app.loadingMostrarTodo = false;
                   // console.log(app.categorias);
                }, function errorCallback(response) {
                    app.medidas = response.data;
                    app.status = response.status;
                    app.loadingMostrarTodo = false;
                   //console.log(indu.sliders);
        });
    };


    app.traerEnvios = function(c){
        //  console.log(c);
      app.loadingMostrarTodo = true;
          $http({method: 'GET',url: 'server/traerEnvios.php?id='+c})
                  .then(function successCallback(response) {
                      app.envios = response.data;
                      app.enviosL = app.envios.length;
                      app.status = response.status;
                      app.loadingMostrarTodo = false;
                      //console.log(app.envios);
                  }, function errorCallback(response) {
                      app.envios = response.data;
                      app.status = response.status;
                      app.loadingMostrarTodo = false;
                     //console.log(indu.sliders);
          });
      };

    app.traerTamanios = function(c){
      //  console.log(c);
    app.loadingMostrarTodo = true;
        $http({method: 'GET',url: 'server/traerTamanios.php?id='+c})
                .then(function successCallback(response) {
                    app.tamanios = response.data;
                    app.tamaniosL = app.tamanios.length;
                    app.status = response.status;
                    app.loadingMostrarTodo = false;
                   // console.log(app.tamanios);
                }, function errorCallback(response) {
                    app.tamanios = response.data;
                    app.status = response.status;
                    app.loadingMostrarTodo = false;
                   //console.log(indu.sliders);
        });
    };
    
    app.traerTalles = function(c){
      //  console.log(c);
    app.loadingMostrarTodo = true;
        $http({method: 'GET',url: 'server/traerTalles.php?id='+c})
                .then(function successCallback(response) {
                    app.talles = response.data;
                    app.tallesL = app.talles.length;
                    app.status = response.status;
                    app.loadingMostrarTodo = false;
                   // console.log(app.talles);
                }, function errorCallback(response) {
                    app.talles = response.data;
                    app.status = response.status;
                    app.loadingMostrarTodo = false;
                   //console.log(indu.sliders);
        });
    };
    
    app.traerModelos = function(c){
      //  console.log(c);
    app.loadingMostrarTodo = true;
        $http({method: 'GET',url: 'server/traerModelos.php?id='+c})
                .then(function successCallback(response) {
                    app.modelos = response.data;
                    app.modelosL = app.modelos.length;
                    app.status = response.status;
                    app.loadingMostrarTodo = false;
                    //console.log(app.modelos);
                }, function errorCallback(response) {
                    app.modelos = response.data;
                    app.status = response.status;
                    app.loadingMostrarTodo = false;
                   //console.log(indu.sliders);
        });
    };
    
    app.traerStocks = function(c){
      //  console.log(c);
    app.loadingMostrarTodo = true;
        $http({method: 'GET',url: 'server/traerStocks.php?id='+c})
                .then(function successCallback(response) {
                    app.stock = response.data;
                    app.stockL = app.stock.length;
                    app.status = response.status;
                    app.loadingMostrarTodo = false;
                   // console.log(app.stock);
                }, function errorCallback(response) {
                    app.stock = response.data;
                    app.status = response.status;
                    app.loadingMostrarTodo = false;
                   //console.log(indu.sliders);
        });
    };
    
    app.sumas_sql = function(tabla,columna,articulo){
      //  console.log(c);
    app.loadingMostrarTodo = true;
        $http({method: 'GET',url: 'server/sumas.php?tabla='+tabla+'&columna='+columna+'&articulo='+articulo})
                .then(function successCallback(response) {
                    app.total = response.data;
                    app.status = response.status;
                    app.loadingMostrarTodo = false;
                    return app.total;
                   // console.log(app.total);
                }, function errorCallback(response) {
                    app.total = response.data;
                    app.status = response.status;
                    app.loadingMostrarTodo = false;
                   //console.log(indu.sliders);
        });
    };
    
    app.sumas_sql_articulos = function(tabla,columna,articulo,key){
      //  console.log(c);
    app.loadingMostrarTodo = true;
        $http({method: 'GET',url: 'server/sumas.php?tabla='+tabla+'&columna='+columna+'&articulo='+articulo})
                .then(function successCallback(response) {
                    app.total[key] = response.data;
                    app.status = response.status;
                    app.loadingMostrarTodo = false;
                    return app.total;
                   // console.log(app.total);
                }, function errorCallback(response) {
                    app.total = response.data;
                    app.status = response.status;
                    app.loadingMostrarTodo = false;
                   //console.log(indu.sliders);
        });
    };
    
    
    
    
    
    app.Edit = function (datosi,tablai,idi,show){
        //console.log(datosi);  
       app.isEditing=true;
       var where = 'id';
       var datos = datosi;
       var link = 'server/edit.php';
       var tabla = tablai;
       var id = idi;
       var show = "1";
       SqlEdit.async(link,datos,tabla,id,where).then(function(d){
            //console.log(d);
            app.showSimpleToast(d);
            app.isEditing = false;
            window.history.back();
       });
    };
   app.Delete = function (id,tabla){
           // console.log(id,tabla);
            var r = confirm("Esta seguro que desea ELIMINAR este dato?");
            if(r===true){
            var link = 'server/delete.php';
            var id = id;
            SqlDelete.async(link,id,tabla).then(function(d){
            //console.log(d);
            app.showSimpleToast("Ha BORRADO un dato.");
            $route.reload();
            });
            }
            
        };
    app.insert = function (datos,tabla){
            var datos = datos;
            var link = 'server/insert_array.php';  
            var tabla = tabla;
            var cantidad = cantidad;
            SqlInsertArray.async(link,datos,tabla).then(function(d){
            //console.log(d);
            app.showSimpleToast(d);
            $route.reload();
            
            });
        };    



});