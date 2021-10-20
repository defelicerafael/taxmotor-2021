 angular.module("upload_icon",['ngFileUpload'])
    .directive("uploadIcon",function(){

        return{
            restrict: "E",
            templateUrl: 'directives/uploader/templates/uploader_icon.html',
            scope: {
                titulo:"@",
                direccion :"@", // es la direccion donde van a ir las fotos
                dirimg:"@", // es la direccion donde va a esar la foto
                cliqueando:"@", // es la direccion donde va a esar la foto
                db:"@"
            },
            controller : function(Upload,$scope,$timeout,$http,$route,pasapalabra,$mdDialog,$location,SqlEdit,$routeParams){
                $scope.insert = [];
                $scope.dir = $scope.direccion;
                $scope.dirI = $scope.dirimg;
                $scope.id= $routeParams.idArt;
                $scope.idArt = $scope.dirimg;
                
                /*$scope.idArtCarousel = "../img/home/articulos/"+$routeParams.idArt+"/carousel/";*/
                //console.log("direccion," + $scope.dir, "dirImg,"+$scope.dirimg,$scope.titulo);

                $scope.setDir = function(dir){
                  $scope.dir = dir;
                  $scope.showDirectory(dir);
                };

                    $scope.uploadFiles = function(files, errFiles,dir) {
                    //console.log(files, errFiles,dir,dirimg);
                    $scope.foto = [];
                    $scope.files = files;
                    $scope.errFiles = errFiles;
                        angular.forEach(files, function(file) {

                                file.upload = Upload.upload({
                                    url: 'directives/uploader/server/server_reducir.php',
                                    data: {file: file,'dir':dir}
                                });

                            file.upload.then(function (response) {
                                $timeout(function () {
                                    file.result = response.data;
                                   // console.log(response.data);
                                    $scope.foto = file.result;
                                    $scope.insert.logo = $scope.foto;
                                    pasapalabra.data.id_foto = $scope.foto;
                                    //console.log(pasapalabra.data.id_foto);
                                    });
                            }, function (response) {
                                if (response.status > 0)
                                    $scope.errorMsg = response.status + ': ' + response.data;
                            }, function (evt) {
                                file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                            });

                        });
                    //store.DatosFotosGaleria();
                    };
                    $scope.showAlert = function(ev,textSi,text) {
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
                    $scope.EditLink = function (datosi,tablai,idi,ev){
                       // console.log(datosi,tablai,idi,ev);
                        $scope.isEditing=true;
                        var where = 'id';
                        var datos = datosi;
                        var link = 'server/editLink.php';
                        var tabla = tablai;
                        var id = idi;
                        SqlEdit.async(link,datos,tabla,id,where).then(function(d){
                            $scope.showAlert(ev,'NOTIFICACI\u00D3N',d);
                            $scope.isEditing = false;
                             $timeout(function() {
                                $scope.$apply(function() {
                                    window.history.back();
                                });
                            }, 2000);
                            
                            
                        });
                    };


                    $scope.guardar = function(){
                        $scope.dirimg = $scope.dirimg.slice(3);
                        console.log($scope.dirimg);
                        $scope.armoDatos = '{"'+$scope.cliqueando+'":"'+$scope.dirimg+$scope.foto+'"}';
                        console.log($scope.armoDatos);
                        $scope.EditLink(JSON.parse($scope.armoDatos),$scope.db,$scope.id,2);
                    }

                    $scope.showDirectory = function (){
                        console.log("empieza a mostrar");
                        $http({method: 'POST',url: 'directives/uploader/server/directories.php',data:{dir:$scope.dirI}})
                        .then(function successCallback(response) {
                            $scope.fotosDirectorio = response.data;
                            console.log($scope.fotosDirectorio);
                        }, function errorCallback(response) {
                            $scope.fotosDirectorio = response.data;
                            console.log($scope.fotosDirectorio);
                        });
                    }; 
                    
                    $scope.reload = function(){
                        $route.reload();
                    };
                   
                    $scope.deleteFoto = function (foto){
                  //  console.log(foto);
                        $http.post('directives/uploader/server/borrarFoto.php',{foto:foto})
                        .then(function(data){
                        $scope.borrarError = data;
                      //  console.log(data);
                        $route.reload();
                        });
                    };
            }
        };
    });
