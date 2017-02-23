import * as angular from 'angular';
class homeComponent implements ng.IComponentController {
    public label: string;

    public $onInit() {
        this.label = "Welcome !";
    };
}

class SelectSearchComponent implements ng.IComponentOptions {

    public bindings: any;
    public controller: ng.Injectable<ng.IControllerConstructor>;
    public controllerAs: string;
    public templateUrl: string;

    constructor() {
        this.bindings = {
        };
        this.controller = homeComponent;
        this.controllerAs = "$ctrl";
        this.templateUrl = "components/home/home.html";
    };
}

angular.module("authModule").component("homeComponent", new homeComponent());