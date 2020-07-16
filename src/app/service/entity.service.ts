import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  apiUrl = 'https://throbbing-morning-5877.getsandbox.com:443/';

  constructor(public http: HttpClient) {}

  getEntities() {
    return this.http.get(`${this.apiUrl}`);
  }
}
