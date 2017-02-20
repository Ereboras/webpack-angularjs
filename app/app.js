import angular from 'angular';

var appModule = angular.module("app", []);

angular.element(document).ready(function () {
    angular.bootstrap(document, [appModule.name], {
        
    });
});

function printTest() {
    console.log("Si pas d'erreurs, il affiche bien le log !");
}
printTest();