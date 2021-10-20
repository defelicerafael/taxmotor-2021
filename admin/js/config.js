(function(){
    var app = angular.module('config',['ngRoute']);

    app.config(function($routeProvider,$sceDelegateProvider){
        
        angular.lowercase = angular.$$lowercase;
        //angular.lowercase = text => text.toLowerCase();
      
        $routeProvider
                .when("/",{
                    templateUrl:"templates/login.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/panel/",{
                    templateUrl:"templates/panel_lista.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/panel/categorias/",{
                    templateUrl:"templates/panel_categorias.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/panel/categorias/editar/id/:idArt",{
                    templateUrl:"templates/editar_categorias.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/panel/protagonistas/",{
                    templateUrl:"templates/panel_protagonistas.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/panel/protagonistas/editar/id/:idArt",{
                    templateUrl:"templates/editar_protagonistas.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/panel/protagonistas/fotos/id/:idArt",{
                    templateUrl:"templates/fotos_protagonistas.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/panel/bio/",{
                    templateUrl:"templates/panel_bio.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/panel/bio/editar/id/:idArt",{
                    templateUrl:"templates/editar_bio.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/panel/bio/fotos/id/:idArt",{
                    templateUrl:"templates/fotos_bio.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/panel/self/",{
                    templateUrl:"templates/panel_self.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/panel/self/editar/id/:idArt",{
                    templateUrl:"templates/editar_self.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/panel/self/fotos/id/:idArt",{
                    templateUrl:"templates/fotos_self.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/panel/carousel/",{
                    templateUrl:"templates/panel_carousel.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/panel/carousel/fotos/id/:idArt",{
                    templateUrl:"templates/fotos_carousel.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/panel/editar/id/:idArt",{
                    templateUrl:"templates/editar.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/panel/fotos/id/:idArt",{
                    templateUrl:"templates/fotos.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/panel/carousel/id/:idArt",{
                    templateUrl:"templates/carousel.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .otherwise("/");
        
        // use the HTML5 History API
        
        
   
    });
    
})();
