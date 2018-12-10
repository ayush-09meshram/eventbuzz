import { Injectable } from '@angular/core';
import {HttpHeaders,HttpClient} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { UserType } from './user';

const httpOptions = {
  headers: new HttpHeaders (
    {
      'Content-Type':'application/json'
    }
  )
}


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  url ="http://13.127.170.181:8083/api/v1/saveuser";

  constructor(private httpClient:HttpClient) { }
  saveUserDetails( user): Observable<any>
  {
    return this.httpClient.post(this.url,user,httpOptions)
  }
}
