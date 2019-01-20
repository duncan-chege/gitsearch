 import { Injectable } from '@angular/core';
 import {Http, Headers} from '@angular/http';
 import "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GitsearchService {
  private username="Boy Wonder";

  constructor(private _http: Http) {
      console.log("Github service has started");
  }
  getUser(){}
    return this._http.get("https://api.github.com/users/"+this.username)
    .map(res=>res.json())  //mapping an observable
  }

}
