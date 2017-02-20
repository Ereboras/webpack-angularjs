export class Class1 {

    public label:string;
    public text:string;
    
    constructor () {
        this.label = "truc de merde";
        this.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    };

    public getLabel():string {
        return this.label;
    }

    public getText():string { 
        return this.text;
    }
}