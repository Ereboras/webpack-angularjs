export class Class2 {

    public label:string;
    public text:string;
    
    constructor () {
        this.label = "label class 2";
        this.text = "text class 2";
    };

    public getLabel():string {
        return this.label;
    }

    public getText():string { 
        return this.text;
    }
}