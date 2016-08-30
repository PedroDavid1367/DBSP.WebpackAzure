import { Routes, RouterModule }      from "@angular/router";
import { TripsHomeComponent }  from "./trips-home.component";

export const routes: Routes = [
  { path: "trips", component: TripsHomeComponent }
];

export const routing = RouterModule.forChild(routes);
