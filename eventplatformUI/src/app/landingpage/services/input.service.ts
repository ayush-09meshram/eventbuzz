import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Show } from '../domains/Show';

@Injectable({
  providedIn: 'root'
})
export class InputService {

  private url="http://13.127.170.181:8080/api/v1/show"
  //private url="/assets/data.json"
  constructor(private  http:HttpClient) { }
   
  getShows(): Observable<Show[]>
  {
    return this.http.get<Show[]>(this.url);
  }
}
