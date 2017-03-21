console.log(" [authModule] [bundle.js] Instanciate angular module");

// Import our librarie(s)
import angular from 'angular';
//import uirouter from 'angular-ui-router';

// Import route for authModule & the ts files needed for this module
import routes from './app.route';
import home from './components/home/home';

angular.module("authModule", ['ui.router'])
    .config(routes)
    .component("homeComponent", home);
