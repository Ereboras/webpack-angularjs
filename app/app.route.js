console.log(" [authModule] [bundle.js] Configure routing");

export default function routes($stateProvider, $locationProvider) {
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