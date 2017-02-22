console.log(" [authModule] Configure routing");
authModule.config([

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