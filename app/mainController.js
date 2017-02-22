authModule.controller("mainController",  [

        "$state", 

        function($state) {
            this.initialize = function() {
                console.log(" [mainController] Initialize controller");
                $state.go("login");
            }

            this.initialize();
        }
    ]
);