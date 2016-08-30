import { Routes, RouterModule }      from "@angular/router";
import { MaterializeHomeComponent }  from "./materialize-home.component";

export const routes: Routes = [
  { path: "materialize-samples", component: MaterializeHomeComponent }
];

export const routing = RouterModule.forChild(routes);
