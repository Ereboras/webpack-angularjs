console.log(" [authModule] Configure routing");
authModule.config([
    "$stateProvider",

    function($stateProvider) {
        $stateProvider
            .state("login", {
                url: "/login",
                component: "loginComponent"
            });
    }
]);