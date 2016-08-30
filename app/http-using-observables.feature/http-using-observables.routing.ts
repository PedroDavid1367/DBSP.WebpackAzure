import { Routes, RouterModule }               from "@angular/router";
import { HttpUsingObservablesHomeComponent }  from "./http-using-observables-home.component";

export const routes: Routes = [
  { path: "http-using-observables", component: HttpUsingObservablesHomeComponent }
];

export const routing = RouterModule.forChild(routes);
