import { Component, Inject, OnInit, ElementRef }  from "@angular/core";

import { DbspListComponent }  from "./dbsp-list.component";

@Component({
  selector: "dbsp-container",
  template: `
  <div>
    <ng-content></ng-content>
  </div>
  `,
  directives: [

  ]
})
export class DbspContainerComponent implements OnInit {

  ngOnInit() {
  }

}
