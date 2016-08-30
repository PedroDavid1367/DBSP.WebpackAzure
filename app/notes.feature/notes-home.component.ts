import { Component }                from '@angular/core';

@Component({
  selector: "notes-home",
  template: `
  <dbsp-note-category-container>
    <dbsp-note-category-list></dbsp-note-category-list>
  </dbsp-note-category-container>
  <hero-list></hero-list>
  <dbsp-container>
    <dbsp-list>
    </dbsp-list>
  </dbsp-container>
  `
})
export class NotesHomeComponent {

}
