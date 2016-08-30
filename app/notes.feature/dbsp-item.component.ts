import { Component, Inject, OnInit, ElementRef, Input, OnDestroy, Output, EventEmitter }  from "@angular/core";


@Component({
  selector: "dbsp-item",
  template: `
  <div>
    <span>{{ name + " " + lastName }} </span>
    <input type="button" class="btn" value="delete" (click)="delete()"/>
  </div>
  `
})
export class DbspItemComponent implements OnInit, OnDestroy {

  @Input() name: string;
  @Input() lastName: string;
  @Output() onDeleteItem: EventEmitter<DbspItemComponent> = new EventEmitter<DbspItemComponent>();

  ngOnInit() {
  }

  delete() {
    this.onDeleteItem.emit(this);
  }

  ngOnDestroy() {
    console.log(`Item with name: ${name} was destroyed.`);
  }
}
