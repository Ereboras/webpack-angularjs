console.log(" [authModule] [bundle.js] Configure routing");

export default [ "$stateProvider", "$locationProvider", function routes($stateProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $stateProvider
        .state("login", {
            url: "/login",
            component: "loginComponent"
        }).state("home", {
            url: "/home",
            component: "homeComponent"
        });
}]