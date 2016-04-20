import {Component} from "angular2/core";
import {Square} from "./Square.component";

@Component({
    selector: 'my-app',
    template: `
<input type="button" (click)="clicked()">
<table>
<tr *ngFor="#row of squares">
 <square *ngFor="#sq of row"></square>
</tr>
</table>`,
    directives: [Square]
})
export class AppComponent {
    squares = [[new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square],
        [new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square],
        [new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square],
        [new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square],
        [new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square],
        [new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square],
        [new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square],
        [new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square],
        [new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square],
        [new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square],
        [new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square],
        [new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square],
        [new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square],
        [new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square],
        [new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square],
        [new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square],
        [new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square, new Square]
    ];

    public changeSquare(row:number, col:number) {
         this.squares[row][col].change();
    }

    clicked(){
        console.log("clicked");
        this.changeSquare(1,1);
    }

}
