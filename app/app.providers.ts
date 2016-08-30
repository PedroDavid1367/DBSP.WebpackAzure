// These imports need a heavy review.
import {HTTP_PROVIDERS, Http, Request, RequestOptionsArgs, Response, XHRBackend,
  RequestOptions, ConnectionBackend, Headers}  from "@angular/http";
import { provide }                             from "@angular/core";  
import { OidcTokenManagerService }             from "./common.services/oidc-token-manager.service"
//import { HttpInterceptorService }              from "./common.services/http-interceptor.service"
import { HttpExtendedService }                 from "./common.services/http-extended.service"
import { TripsService }                        from "./trips.feature/trips.services/trips.service";
import { TripsHomegGuard }                     from "./trips.feature/trips-home.guard";
import { IHeroService }                        from "./notes.feature/hero.service";
import { InMemoryBackendService, SEED_DATA }   from "angular2-in-memory-web-api";
import { HeroData }                            from "./mocked-data/hero-data";

let $ = require("jquery");

export const APP_PROVIDERS = [
  provide("BASE_URL", { useValue: "https://localhost:44315" }),  // Gallery REST API Application
  provide("$", { useValue: $ }),
  OidcTokenManagerService,
  HttpExtendedService,           // This is new one
  TripsService,
  IHeroService,
  TripsHomegGuard               // Not quite sure about this guard.
  //{ provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
  //{ provide: SEED_DATA, useClass: HeroData }                 // in-mem server data

  // The router dependency could be avoided since actually does nothing in the current service.
  //HttpInterceptorService
  //provide(Http, {
  //  useFactory: (xhrBackend: XHRBackend, requestOptions: RequestOptions, router: Router, _oidcToken: OidcTokenManagerService) => {
  //    new HttpInterceptorService(xhrBackend, requestOptions, router, _oidcToken)
  //  },
  //  deps: [XHRBackend, RequestOptions, Router, OidcTokenManagerService]
  //})
];

