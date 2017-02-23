export default angular.module("authModule").component("homeComponent", {
    bindings: {
    },

    templateUrl: "components/home/home.html",

    controller: function() {
        "use strict";
        var ctrl = this;
        ctrl.$onInit = function() {
            console.log(" [homeComponent] Initialize component");
            this.label = "Welcome !";
        };
    }
});