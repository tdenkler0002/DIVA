import { Injectable } from '@angular/core';
import {Http, Response, Request, RequestMethod, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import {User} from '../user'

@Injectable()
export class UserServiceService {

  constructor( private http: Http) { }
  userUrl = 'http://localhost:8000/users/';

  addUser(user: User) {
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
