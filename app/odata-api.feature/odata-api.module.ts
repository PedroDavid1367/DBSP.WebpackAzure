import { NgModule }            from "@angular/core";
import { CommonModule }        from "@angular/common";

import { routing }             from "./odata-api.routing";
import { ODataAPIHomeComponent }  from "./odata-api-home.component";
import { ODataManagerService }  from "../common.services/odata-manager.service";

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    ODataAPIHomeComponent
  ],
  providers: [
    //ODataManagerService
  ]
})
export class ODataAPIModule { }
