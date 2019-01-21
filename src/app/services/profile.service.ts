import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
// use map operator to return all results from github into observables, then we will use observables in components were we will subscribe to them and we'll catch all the data
import 'rxjs/add/operator/map';

@Injectable()
//   providedIn: 'root'
// })
export class ProfileService {

  private username:string;     //properties to use in our service
  //below will be used as we export data into github api. Will guve you unlimited no of times yu can eprt data
  private clientid= "ef3978db4ad410298d51";
  private clientsecret= "b2e1fabf13e3e3d51bdcc8420f4fedd7ad5da8eb";

  constructor(private http:Http ) {  //inject http module into the constructor
    console.log("Service is now ready");
    this.username="dunyung1";
  }

  getProfileInfo(){  //function to be used to get data from github api
    return this.http.get("https://api.github.com/users/" +this.username +
    "?client_id=" +this.clientid + "&client_secret=" +this.clientsecret)
    .map(res=> res.json());  //covert info received into observables

  }
}
 
