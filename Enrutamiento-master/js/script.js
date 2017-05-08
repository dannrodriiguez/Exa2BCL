var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // Home View
        .state('home', {
            url: '/home',
            templateUrl: 'templates/homePage.html'
        })

        // Info Vies
        .state('about', {
            url: '/about',
            templateUrl: 'templates/info.html'
        })
    
                .state('metas', {
            url: '/metas',
            templateUrl: 'templates/mismetas.html'
        })
    
    .state('soy', {
            url: '/soy',
            templateUrl: 'templates/comosoy.html'
        })



});

