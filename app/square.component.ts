import {Component} from 'angular2/core';

@Component({
    selector: 'square',
    template: '<div [class.red]="index==0"  ></div>'
})
export class Square {

    index:number = 0;
    color:String;
  
    
    public change() {
        console.log("changed");
        console.log(this.index);
        this.index = (this.index+1) % 2;
        this.color="green";
    }



}
