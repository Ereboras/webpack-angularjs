console.log(" [authModule] [bundle.js] Configure routing");

angular.module("authModule").config([

    "$stateProvider",
    "$locationProvider", 

    function($stateProvider, $locationProvider) {
        $locationProvider.hashPrefix('');

        $stateProvider
            .state("login", {
                url: "/login",
                component: "loginComponent"
            }).state("home", {
                url: "/home",
                component: "homeComponent"
            });
    }
]);