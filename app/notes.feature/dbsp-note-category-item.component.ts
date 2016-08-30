import { Component, Inject, OnInit, ElementRef, Input }  from "@angular/core";

@Component({
  selector: "dbsp-note-category-item",
  template: `
  <li>
    <div class="collapsible-header">
      <i class="material-icons">info_outline</i>{{ title }}
      <span></span>
    </div>
    <div class="collapsible-body"><p>{{ content }}</p></div>
  </li>
  `
})
export class DbspNoteCategoryItemComponent {

  @Input() private title: string;
  @Input() private content: string;
}

