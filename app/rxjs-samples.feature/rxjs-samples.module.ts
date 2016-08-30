import { NgModule }                  from "@angular/core";
import { CommonModule }              from "@angular/common";

import { routing }                   from "./rxjs-samples.routing";
import { RxJSSamplesHomeComponent }  from "./rxjs-samples-home.component"
import { RxJSSample01Component }     from "./rxjs-sample01.component";
import { RxJSSample02Component }     from "./rxjs-sample02.component";

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    RxJSSamplesHomeComponent,
    RxJSSample01Component,
    RxJSSample02Component
  ]
})
export class RxjsSamplesModule { }
