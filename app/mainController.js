angular.module("authModule").controller("mainController",  [

        "$state", 

        function($state) {
            this.initialize = function() {
                console.log(" [mainController] [raw js file] Initialize controller");
                $state.go("login");
            }

            this.initialize();
        }
    ]
);