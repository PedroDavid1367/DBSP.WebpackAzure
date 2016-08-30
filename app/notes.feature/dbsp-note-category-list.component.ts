import { Component, Inject, OnInit, ElementRef }  from "@angular/core";

@Component({
  selector: "dbsp-note-category-list",
  template: `
  <dbsp-note-category-item *ngFor="let c of categories"
                           [title]="c.title"
                           [content]="c.content">
  </dbsp-note-category-item>
  `
})
export class DbspNoteCategoryListComponent implements OnInit {

  categories = [
    {
      title: "Work stuff",
      content: "Some quite boring things to do"
    },
    {
      title: "Development stuff",
      content: "Really challenging stuff, well, not really."
    }
  ];

  ngOnInit() {

  }
}
