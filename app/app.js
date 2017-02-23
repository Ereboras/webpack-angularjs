console.log(" [authModule] [bundle.js] Instanciate angular module");

require('angular');
require('angular-ui-router');

var authModule = angular.module("authModule", ['ui.router']);
require('app.route');
require('./components/home/home');