require("../js.libs/odatajs-4.0.0.min.js");
declare let odatajs: any;

import { Injectable} from '@angular/core';

@Injectable()
export class ODataManagerService {

  private _odata: any;

  constructor() {
    this._odata = odatajs.oData;
  }

  public get odata() {
    return this._odata;
  }
}
