 angular.module("Header",[])
    .directive("header",function($mdDialog,$http){
        
        return{
            
            restrict: "E",
            templateUrl: 'directives/header/templates/header.html',
            scope: {
               
            },
            controller : function($scope,$mdSidenav){
                
                $scope.crear;

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

                $scope.toggleSidenav = buildToggler('closeEventsDisabled');
                function buildToggler(componentId) {
                    return function() {
                        $mdSidenav(componentId).toggle();
                    };
                }

                $scope.publicarCambios = function(ev){
                    $http({method: 'GET',url: 'server/crearProductosJson.php'})
                    .then(function successCallback(response) {
                        $scope.crear = response.data;
                        $scope.showAlert(ev,'NOTIFICACI\u00D3N',$scope.crear);
                        $scope.status = response.status;
                        $scope.loadingMostrarTodo = false;
                    }, function errorCallback(response) {
                        $scope.crear = response.data;
                        $scope.status = response.status;
                        $scope.showAlert(ev,'NOTIFICACI\u00D3N',$scope.status);
                        
                    });
                };
            }
        };
    });
        
    
   
  

