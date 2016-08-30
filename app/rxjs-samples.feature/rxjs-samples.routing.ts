import { Routes, RouterModule }      from "@angular/router";
import { RxJSSamplesHomeComponent }  from "./rxjs-samples-home.component";
import { RxJSSample01Component }     from "./rxjs-sample01.component";
import { RxJSSample02Component }     from "./rxjs-sample02.component";

export const routes: Routes = [
  {
    path: "rxjs-samples",
    component: RxJSSamplesHomeComponent,
    children: [
      {
        path: "",
        redirectTo: "rxjs-sample-01"
      },
      {
        path: "rxjs-sample-01",
        component: RxJSSample01Component
      },
      {
        path: "rxjs-sample-02",
        component: RxJSSample02Component
      }
    ]
  }
];

export const routing = RouterModule.forChild(routes);