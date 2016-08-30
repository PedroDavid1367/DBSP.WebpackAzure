﻿import { Component }        from "@angular/core";
import { Observable }       from "rxjs/Observable";
import { Subject }          from "rxjs/Subject";

import { WikipediaService } from "./wikipedia.service";

@Component({
  selector: "wiki-search-smart",
  template: `
    <h3>Smarter Wikipedia Demo</h3>
    <p><i>Fetches when typing stops</i></p>

    <input #term (keyup)="search(term.value)"/>

    <ul>
      <li *ngFor="let item of items | async">{{item}}</li>
    </ul>
  `,
  providers: [
    WikipediaService
  ]
})
export class WikiSearchSmartComponent {

  constructor(private wikipediaService: WikipediaService) { }

  private searchTermStream = new Subject<string>();

  search(term: string) {
    this.searchTermStream.next(term);
  }

  items: Observable<string[]> = this.searchTermStream
    .debounceTime(300)
    .distinctUntilChanged()
    .switchMap((term: string) => this.wikipediaService.search(term));
}