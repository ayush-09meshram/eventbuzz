import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDistributor } from '../domains/Distributor';
import { ICity } from '../domains/City';
import { IMovie } from '../domains/Movie';

@Injectable({
  providedIn: 'root'
})
export class DistributorService {

  private url = "http://localhost:8081/api/v1/distributor";
  constructor(private http: HttpClient) { }

  getDistributors(): Observable<IDistributor[]> {;
    return this.http.get<IDistributor[]>(this.url);
  }

  getDistributor(email:string): Observable<IDistributor> {
    const geturl=`${this.url}/${email}`;
    return this.http.get<IDistributor>(geturl);
  }
  addCity(email:string,city:ICity) {
    const puturl=`${this.url}/${email}`;
    this.http.put(puturl,city).subscribe((data)=>{
      console.log(data);
    },
    (error)=>{console.log(error)});
  }
  addMovie(email:string,cityName:string,movie:IMovie) {
    console.log("add movie in service");
    const add="addNewMovie";
    const puturl=`${this.url}/${email}/${cityName}/${add}`;
    this.http.put(puturl,movie).subscribe((data)=>{
      console.log(data);
    },
    (error)=>{console.log(error)});
  }
  deleteCity(email:string,cityName:string) {
    console.log("delete in service");
    const delet="deleteCity";
    const deleteUrl=`${this.url}/${email}/${cityName}/${delet}`;
    this.http.delete(deleteUrl).subscribe((data)=>{
      console.log(data);
    },
    (error)=>{console.log(error)});
  }
  deleteMovie(email:string,cityName:string,movieId:number) {
    console.log("delete in service");
    const delet="deleteMovie";
    const deleteUrl=`${this.url}/${email}/${cityName}/${movieId}/${delet}`;
    this.http.delete(deleteUrl).subscribe((data)=>{
      console.log(data);
    },
    (error)=>{console.log(error)});
  }
}

