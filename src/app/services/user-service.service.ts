import { Injectable } from '@angular/core';
import {Http, Response, Request, RequestMethod, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {User} from '../user'

@Injectable()
export class UserServiceService {

  constructor( private http: Http) { }
  userUrl = '/users/ ';
  citizenshipDocument: any;
  biometricsDocument: any;
  docType: string;
  currentUser: User;

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
    this.currentUser = user;

    // If user has not submitted documentation - reject.
    if(!user.citizenshipDocument || !user.biometricsDocument) {
      alert('Citizen Document and/or Biometrics is required')
      return;
    }

    // Add headers to the http call
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-CSRFToken', this.getCookie('csrftoken'));

    // POST http call to server with appended Headers, USER to promise
    return this.http.post(
      this.userUrl,
      JSON.stringify(user),
      {headers: headers}).toPromise()
      .then(this.extractData)
      .catch(this.catchError)
    }

    // Response body to JSON
    extractData(res: Response) {
      res.json();
    }

    // Error Handling
    catchError(error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server Error';
      console.error(errMsg);
      alert(errMsg);
      return Observable.throw(errMsg);
    }

    // Get cookie for request
    getCookie(name: string) {
      let value = "; " + document.cookie;
      let parts = value.split("; " + name + "=");
      if (parts.length == 2) {
        return parts.pop().split(";").shift();
      }
    }
}
