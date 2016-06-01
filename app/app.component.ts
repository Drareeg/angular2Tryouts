import {Component} from "angular2/core";
declare var diffview:any;
declare var diffview__report:any;

@Component({
    selector: 'my-app',
    styles: [`
      div {
      width : 10px;
      height: 10px;
      },

   `],
    template: `
               <label>Input</label><br>
               <textarea type="text" [(ngModel)]="inputText"rows="5"></textarea>
               <input value="GO" type="button" (click)="convert()"/>

               <br>

               <label>Regexes</label><br>
              <textarea type="text" [(ngModel)]="regexText" rows="5"></textarea>



               <br>


               <p [innerHTML]="resultHTML"></p>
               <p>
               <label>Result</label><br>
               <textarea type="text" [(ngModel)]="resultText"rows="5"></textarea>
               </p>
               `,
})
export class AppComponent {

    inputText:string = 'aaaaaa';
    regexText:string = 'a/b';
    resultText:string;
    resultHTML:string;


    public convert() {
        this.resultHTML = "";

        var regexEntries:Array<string> = this.regexText.split("\n");

        var resultInTheMaking:string = this.inputText;
        for (var regexEntry of regexEntries) {
            resultInTheMaking = this.applyOneRegex(resultInTheMaking, regexEntry);
        }
        this.resultText = resultInTheMaking;


    }

    private applyOneRegex(resultInTheMaking:string, regexEntry:string) {
        var splat:Array<string> = regexEntry.split("/");
        var replaceWhat:string = splat[0];
        var replaceWith:string = splat[1];

        var regexp:RegExp = new RegExp(replaceWhat, 'g');


        console.log("replacing " + regexp + " with " + replaceWith + " in text " + resultInTheMaking);
        var result:string = resultInTheMaking.replace(regexp, replaceWith);

        this.resultHTML += '<br><textarea type="text" rows="5">' + result + '</textarea><br>';
        this.addDiff(resultInTheMaking, result);

        return result;
    }

    private addDiff(origin:string, changed:string) {
        var args:any = {
            source: origin,
            diff: changed,
            lang: "text",
            diffview: "sidebyside",
            mode: "beautify",
            jsscope: "html"
        };
        console.log(diffview);
        var output = diffview(args);
        //console.log(diffview__report());
        this.resultHTML += "<br>"+output+"<br>";
    }
}