console.log(" [authModule] Instanciate angular module");

require('angular');
require('angular-ui-router');

var authModule = angular.module("authModule", ['ui.router']);
require('app.route');