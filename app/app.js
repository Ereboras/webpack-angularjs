console.log(" [authModule] [bundle.js] Instanciate angular module");

// Import our librarie(s)
import angular from 'angular';
import ngAnimate from 'angular-animate';
//import uiRouter from 'angular-ui-router';
//import notification from 'angular-ui-notification';
//import ngCookies from 'angular-cookies';
//import uiBootstrap from 'angular-ui-bootstrap';
//import draganddrop from 'angular-draganddrop';

// Import route for authModule & the ts files needed for this module
import routes from './app.route';
import home from './components/home/home';

angular.module("authModule", [
    "notification",
	"ngCookies",
	ngAnimate,
    "ui.router"
    ]).config(routes)
    .component("homeComponent", home);
