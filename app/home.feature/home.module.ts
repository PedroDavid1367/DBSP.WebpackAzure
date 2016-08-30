import { NgModule }                from "@angular/core";

import { routing }                 from "./home.routing";
import { AppHomeComponent }        from "./app-home.component";
import { CallbackComponent }       from "./callback.component";
import { LocalLogoutComponent }    from "./local-logout.component";
import { NotFoundComponent }       from "./not-found.component";  // Not yet implemented.
import { SilentRefreshComponent }  from "./silent-refresh.component";

@NgModule({
  imports: [
    routing
  ],
  declarations: [
    AppHomeComponent,
    CallbackComponent,
    LocalLogoutComponent,
    NotFoundComponent,
    SilentRefreshComponent
  ]
})
export class HomeModule { }
