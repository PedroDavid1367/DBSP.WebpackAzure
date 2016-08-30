import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot }  from "@angular/router";
import { OidcTokenManagerService }                                   from "../common.services/oidc-token-manager.service";
import { Injectable }                                                from "@angular/core";

@Injectable()
export class TripsHomegGuard implements CanActivate {

  private _mgr: any;
  private _isValid: boolean = false;

  constructor(private _oidcTokenManager: OidcTokenManagerService) {

    this._mgr = _oidcTokenManager.mgr;
    if (this._mgr.expired) {
      this._mgr.redirectForToken();
    } else {
      this._isValid = true;
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

    return this._isValid;
  }
}