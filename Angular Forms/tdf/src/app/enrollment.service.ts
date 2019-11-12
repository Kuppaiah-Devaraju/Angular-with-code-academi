import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
_url="";
  constructor(private _httpClient:HttpClient) { }
  enroll(user:User){
   return this._httpClient.post<any>(this._url,user);
  }
}
