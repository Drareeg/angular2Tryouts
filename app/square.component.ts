import {Component, Input} from 'angular2/core';

@Component({
    selector: 'square',
    styles: [`
    .div {
      height: 70px;
      width: 7  0px;
    }
  `],
    template: `<div (click)="doStuff()" [style.color]='model'>{{model}}</div>`
})
export class Square {

    @Input() row:number;
    @Input() column:number;


    public model:string = 'red';

    doStuff() {
        this.model = 'green';
        console.log('in square');
    }


}
