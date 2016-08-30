import { Component }                                from "@angular/core";
import { Http, Response, Headers, RequestOptions }  from "@angular/http";
import { Observable }                               from "rxjs/Observable";
import { ODataManagerService }  from "../common.services/odata-manager.service";
import { OidcTokenManagerService }  from "../common.services/oidc-token-manager.service";

@Component({
  selector: 'odata-api-home',
  template: `
  OData API Home
  <br />
  <br />
  <br />
  <input class="btn" type="button" value="Get Notes" (click)="getNotes()" /><br />
  <pre>{{ _apiGetResposnse | json }}</pre>
  <br />
  <br />
  <hr />
  <br />
  <br />
  <input class="btn" type="button" value="Add Note" (click)="addNote()" /><br />
  <pre>{{ _apiPostResposnse | json }}</pre>
  `
})
export class ODataAPIHomeComponent {

  private _rememberMeAPIUrl = "http://localhost:7338/odata/Notes"; 
  private _apiGetResposnse;
  private _apiPostResposnse;
  private _odata: any;
  private _mgr: any;

  constructor(private _http: Http,
    //private _oDataManagerService: ODataManagerService,
    private _oidcTokenManagerService: OidcTokenManagerService) {

    //this._odata = _oDataManagerService.odata;
    this._mgr = _oidcTokenManagerService.mgr;
  }

  public getNotes() {
    let headers = new Headers();
    headers.set('Accept', 'text/json');
    headers.set('Authorization', 'Bearer ' + this._mgr.access_token);

    this._http
      .get(this._rememberMeAPIUrl, { headers: headers })
      .map(res => res.json().value)
      .catch(this.handleError)
      .subscribe(res => this._apiGetResposnse = res);
  }

  public addNote() {
    let noteContainer = {
      Title: "Python",
      Content: "Donec s Vestibulum malesuada odio vitae lorem dapibus fermentum.",
      Category: "Programming Languages",
      Priority: 2
    };
    let headers = new Headers();
    headers.set("Content-Type", "application/json");
    headers.set("Accept", "application/json");
    headers.set("Authorization", "Bearer " + this._mgr.access_token);
    let body = JSON.stringify(noteContainer);
    let options = new RequestOptions({ headers: headers });
    this._http
      .post(this._rememberMeAPIUrl, body, options)
      .map(res => {
        console.log(res);
        console.log(res.json());
        return res.json();
      })
      .catch(this.handleError)
      .subscribe(res => this._apiPostResposnse = res);
  }

  //public addHero(heroContainer: {}): Observable<Hero> {
  //  let body = JSON.stringify(heroContainer);
  //  let headers = new Headers({ "Content-Type": "application/json" });
  //  let options = new RequestOptions({ headers: headers });
  //  return this.http
  //    .post(this.heroesUrl, body, options)
  //    .map(this.extractData)
  //    .catch(this.handleError);
  //}

  // Using OData Olingo
  //public getNotes() {
  //  let request = {
  //    requestUri: "http://localhost:7338/odata",
  //    method: "GET",
  //    headers: { Accept: "application/json" }
  //  }

  //  this._odata.request(request,
  //    (data, response) => {
  //      console.log("The data:");
  //      console.log(data);
  //      console.log("The response:");
  //      console.log(response);
  //      this._apiResposnse = data.value;
  //    },
  //    (err) => {
  //      this.handleError(err);
  //    }
  //  );
  //}

  private extractData(res: Response) {
    console.log(res);
    let body = res.json();
    console.log(body);
    return body.data || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

