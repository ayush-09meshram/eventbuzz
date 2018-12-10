import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError} from 'rxjs/operators';
import { Show } from './show.modal';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/abstract_emitter';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  public private_url="http://localhost:8080/api/v1/show";

  public private_url2="http://localhost:8089/api/v1/producer";

  public private_url3="http://localhost:8081/api/v1/distributor";

  constructor(private http:HttpClient) { }

  addShow(show:Show):Observable<any>{
    return this.http.post(this.private_url,show).pipe(catchError(this.errorHandler));
  }
  errorHandler(error:HttpErrorResponse){
    return throwError(error.message||"Server error");
  }
  updateShow(id:number,show:Show):Observable<any>{
    return this.http.put(this.private_url+"/"+id,show).pipe(catchError(this.errorHandler));
  }
  deleteShow(city:string,movieId:number,id:number):Observable<any>{
    return this.http.delete(this.private_url+"/"+city+"/"+movieId+"/"+id).pipe(catchError(this.errorHandler));
  }
  getAllShows():Observable<any>{
    return this.http.get(this.private_url);
  }

  getAllTheatres(email:string):Observable<any>{
    return this.http.get(this.private_url2+"/"+email+"/");
  }
  getMoviesByCity(city:string):Observable<any>{
    return this.http.get(this.private_url3+"/"+city+"/getMovies");
  }
}
