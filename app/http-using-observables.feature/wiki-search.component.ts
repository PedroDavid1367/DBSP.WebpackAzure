import { Component }         from "@angular/core";
import { Observable }        from "rxjs/Observable";

import { WikipediaService }  from "./wikipedia.service";

@Component({
  selector: "wiki-search",
  template: `
    <h3>Wikipedia Demo</h3>
    <p><i>Fetches after each keystroke</i></p>

    <input #term (keyup)="search(term.value)"/>

    <ul>
      <li *ngFor="let item of items | async">{{item}}</li>
    </ul>
  `,
  providers: [
    WikipediaService
  ]
})
export class WikiSearchComponent {
  items: Observable<string[]>;

  constructor(private wikipediaService: WikipediaService) { }

  search(term: string) {
    this.items = this.wikipediaService.search(term);
  }
}