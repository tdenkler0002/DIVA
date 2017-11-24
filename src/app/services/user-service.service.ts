import { Injectable } from '@angular/core';
import {Http, Response, Request, RequestMethod, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import {User} from '../user'

@Injectable()
export class UserServiceService {

  constructor( private http: Http) { }
  userUrl = '/users/ ';
  citizenshipDocument: any = "None";
  biometricsDocument: any = "None";
  docType: string;

  // Holds the documentation variables for manual append to User Model
  addUserDoc(userDoc, docType) {
    if(docType=="Citizenship") {
      this.citizenshipDocument = userDoc;
    }
    if(docType=="Biometrics") {
      this.biometricsDocument = userDoc;
    }
  }

  addUser(user: User) {
    // Manually adds to the User model for POST
    user.citizenshipDocument = this.citizenshipDocument;
    user.biometricsDocument = this.biometricsDocument;

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-CSRFToken', this.getCookie('csrftoken'));
    return this.http.post(
      this.userUrl,
      JSON.stringify(user),
      {headers: headers}).toPromise()
      .then(res => res.json())
    }

    getCookie(name: string) {
      let value = "; " + document.cookie;
      let parts = value.split("; " + name + "=");
      if (parts.length == 2) {
        return parts.pop().split(";").shift();
      }
    }
}
