import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Show } from './show.modal';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  public private_url="http://13.127.170.181:8080/api/v1/show";

  public private_url2="http://13.127.170.181:8085/api/v1/producer/getTheatreByCity";

  public private_url3="http://13.127.170.181:8082/api/v1/distributor";

  constructor(private http:HttpClient) { }

  addShow(show:Show):Observable<any>{
    return this.http.post(this.private_url,show);
  }
  updateShow(id:number,show:Show):Observable<any>{
    return this.http.put(this.private_url+"/"+id,show);
  }
  deleteShow(city:string,movieId:number,id:number):Observable<any>{
    return this.http.delete(this.private_url+"/"+city+"/"+movieId+"/"+id);
  }
  getAllShows():Observable<any>{
    return this.http.get(this.private_url);
  }

  getAllTheatres(email:string,location:string):Observable<any>{
    return this.http.get(this.private_url2+"/"+email+"/"+location);
  }
  getMoviesByCity(city:string):Observable<any>{
    return this.http.get(this.private_url3+"/"+city+"/getMovies");
  }
}
