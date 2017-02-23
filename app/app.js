console.log(" [authModule] Instanciate angular module");

var angular = require('angular');

var authModule = angular.module("authModule", ['ui.router']);
require('app.route');