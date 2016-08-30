import { Routes, RouterModule }      from "@angular/router";

import { AppHomeComponent }          from "./home.feature/app-home.component"
import { RxJSSamplesHomeComponent }  from "./rxjs-samples.feature/rxjs-samples-home.component";
import { TripsHomeComponent }        from "./trips.feature/trips-home.component";

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
];

export const routing = RouterModule.forRoot(routes);


