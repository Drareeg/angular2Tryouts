import {Component} from "angular2/core";
import {Square} from "./Square.component";

@Component({
    selector: 'my-app',
    template: `
<div *ngFor="#i of [1,2,3]">
    <div *ngFor="#j of [1,2,3]">
        <square #square [row]="i" [column]="j"></square>
    </div>
 </div>
`,
    directives: [Square]
})
export class AppComponent {

}
