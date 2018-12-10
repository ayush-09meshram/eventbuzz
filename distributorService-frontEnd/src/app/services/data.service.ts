import { Injectable } from '@angular/core';
import { IDistributor } from '../domains/Distributor';
import { BehaviorSubject } from 'rxjs';
import { DistributorService } from './distributor.service';
import { ICity } from '../domains/City';
import { IMovie } from '../domains/Movie';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public distributors:IDistributor[];
  private distributorsSource=new BehaviorSubject<IDistributor[]>([]);
  currentDistributors=this.distributorsSource.asObservable();

  public distributor:IDistributor={"email":"arshad","cities":[]};
  private distributorSource=new BehaviorSubject<IDistributor>({"email":"defaultmail","cities":[]});
  currentDistributor=this.distributorSource.asObservable();

  public distributorList=[];
  public cities=[];
  public city:ICity={"cityName":"arshad","movies":[]};
  private citySource=new BehaviorSubject<ICity>({"cityName":"defaultmovie","movies":[]});
  currentCity=this.citySource.asObservable();

  public movies=[];
  public movie:IMovie={
    "movieId": 7,
    "movieTitle": "check",
    "yearOfRelease": "2018",
    "posterUrl": "shxbj",
    "ratingArray": [
        1,
        2,
        3
    ],
    "averageRating": 3,
    "language": "english",
    "certificate": "UA",
    "genre": "action"
};
  private movieSource=new BehaviorSubject<IMovie>({
    "movieId": 0,
    "movieTitle": "check",
    "yearOfRelease": "2018",
    "posterUrl": "shxbj",
    "ratingArray": [
        1,
        2,
        3
    ],
    "averageRating": 3,
    "language": "english",
    "certificate": "UA",
    "genre": "action"
});
  currentMovie=this.movieSource.asObservable();

  constructor(private distributorService:DistributorService) { }
  changeDistributors()
  {
    console.log("changedistributor");
    this.distributorService.getDistributors().subscribe((data)=>{
      this.distributors=data;
      this.distributorsSource.next(this.distributors);
    });
    
  }
}
