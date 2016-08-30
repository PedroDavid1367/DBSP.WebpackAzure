import { Routes, RouterModule }      from "@angular/router";
import { NotesHomeComponent }        from "./notes-home.component";

export const routes: Routes = [
  { path: "note-components", component: NotesHomeComponent }
];

export const routing = RouterModule.forChild(routes);
