import { NgModule }                           from "@angular/core";
import { CommonModule }                       from "@angular/common";

import { routing }                            from "./http-using-observables.routing";
import { HttpUsingObservablesHomeComponent }  from "./http-using-observables-home.component"
import { HeroListComponent }                  from "./hero-list.component";
import { WikiSearchComponent }                from "./wiki-search.component";
import { WikiSearchSmartComponent }           from "./wiki-search-smart.component";

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    HttpUsingObservablesHomeComponent,
    HeroListComponent,
    WikiSearchComponent,
    WikiSearchSmartComponent
  ]
})
export class HttpUsingObservablesModule { }
