import { Component }          from "@angular/core";
import { HeroListComponent }  from "./hero-list.component";

@Component({
  selector: 'http-using-observables-home',
  template: `
  The Http using Observables component
  <br />
  <br />
  <hero-list></hero-list>
  <br />
  <br />
  <wiki-search></wiki-search>
  <br />
  <br />
  <wiki-search-smart></wiki-search-smart>
  `
})
export class HttpUsingObservablesHomeComponent {

}

