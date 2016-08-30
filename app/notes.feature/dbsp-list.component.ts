import { Component, Inject, OnInit, ElementRef }  from "@angular/core";
import { DbspItemComponent }  from "./dbsp-item.component";

@Component({
  selector: "dbsp-list",
  template: `
  <dbsp-item *ngFor="let p of persons" 
             [name]="p.name"
             [lastName]="p.lastName"
             (onDeleteItem)="deleteItem($event)">
  </dbsp-item>
  `
})
export class DbspListComponent implements OnInit {

  persons = [
    {
      name: "Pedro",
      lastName: "Fuentes"
    },
    {
      name: "David",
      lastName: "Antezana"
    }
  ];

  ngOnInit() {
    console.log(this.persons);
  }

  deleteItem(item: DbspItemComponent) {
    console.log(item);
    let indexToDelete;
    for (let index in this.persons) {
      if (this.persons[index].name === item.name) {
        indexToDelete = index;
        break;
      }
    }
    this.persons.splice(indexToDelete, 1);
    console.log(this.persons);
  }

}
