import { Component, Inject, OnInit, ElementRef }  from "@angular/core";

@Component({
  selector: "dbsp-note-category-container",
  template: `
  <div class="center" style="background-color:beige;height:50px;">Title</div>
  <ul class="collapsible" data-collapsible="expandable">
    <ng-content></ng-content>
  </ul>
  `
})
export class DbspNoteCategoryContainerComponent implements OnInit {

  constructor( @Inject("$") private $: any,
    private _elRef: ElementRef) { }

  ngOnInit() {
    this.$(this._elRef.nativeElement)
      .find(".collapsible")
      .collapsible();
  }

}
