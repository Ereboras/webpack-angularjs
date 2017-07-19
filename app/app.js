console.log(" [authModule] [bundle.js] Instanciate angular module");

// Import our librarie(s)
import angular from 'angular';
import uiRouter from 'angular-ui-router';

// Import style files
import './main.scss';
import './components/login/login.scss'; // Can't import in login.js since it is not bundlelized by webpack

// Import route for authModule & the ts files needed for this module
import routes from './app.route';
import homeComponent from './components/home/home';

angular.module("authModule", [  
    uiRouter
    ]).config(routes)
    .component("homeComponent", homeComponent);