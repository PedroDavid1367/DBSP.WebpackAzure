import { NgModule }                  from "@angular/core";
import { CommonModule }              from "@angular/common";

import { routing }                   from "./materialize.routing";
import { MaterializeHomeComponent }  from "./materialize-home.component"
import { DbspCollapsibleComponent }  from "./dbsp-collapsible.component";

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    MaterializeHomeComponent,
    DbspCollapsibleComponent
  ]
})
export class MaterializeModule { }
