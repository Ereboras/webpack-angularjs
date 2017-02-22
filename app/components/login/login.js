angular.module("authModule").component("loginComponent", {
    bindings: {
    },

    templateUrl: "components/login/login.html",

    controller: function() {
        "use strict";
        var ctrl = this;
        ctrl.$onInit = function() {
            console.log(" [loginComponent] Initialize component");
            this.email = "";
            this.mdp = "";
        };

        ctrl.connect = function() {
            console.log("[loginComponent] Connection - email:" + this.email + " mdp:" + this.mdp);
        };
    }
});