import { NgModule }            from "@angular/core";
import { CommonModule }        from "@angular/common";

import { routing }             from "./trips.routing";
import { TripsHomeComponent }  from "./trips-home.component"

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [TripsHomeComponent]
})
export class TripsModule { }
