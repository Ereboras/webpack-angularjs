import * as angular from 'angular';
class homeController implements ng.IComponentController {
    public label: string;

    public $onInit() {
        console.log(" [authModule] [bundle.js] [ts] Intializing component");
        this.label = "Welcome !";
    };
}

class homeComponent implements ng.IComponentOptions {

    public bindings: any;
    public controller: ng.Injectable<ng.IControllerConstructor>;
    public controllerAs: string;
    public templateUrl: string;

    constructor() {
        this.bindings = {
        };
        this.controller = homeController;
        this.controllerAs = "$ctrl";
        this.templateUrl = "components/home/home.html";
    };
}

export default new homeComponent();