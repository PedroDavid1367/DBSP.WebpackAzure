import { Routes, RouterModule }   from "@angular/router";
import { ODataAPIHomeComponent }  from "./odata-api-home.component";

export const routes: Routes = [
  { path: "odata-api", component: ODataAPIHomeComponent }
];

export const routing = RouterModule.forChild(routes);
