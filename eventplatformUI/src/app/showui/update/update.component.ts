import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormGroupDirective, NgForm, Validators, FormControl } from "@angular/forms";
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { Category } from '../category.modal';
import { Timing } from '../timing.modal';
import { Theatre } from '../theatre.modal';
import { Movie } from '../movie.modal';
import { Show } from '../show.modal';
import { ShowService } from '../show.service';
import { AlertsService } from 'angular-alert-module';
import { Router } from '@angular/router';
import * as jwt_decode from "jwt-decode";
import { AuthToken } from 'src/app/shared/authToken';

export interface Location {
  value: string;
}
export interface Movie1 {
  movieId:number;
  movieTitle: string;
  yearOfRelease:string;
  posterUrl:string;
  ratingArray:number[];
  averageRating:number;
  language:string;
  certificate:string;
  genre:string[];
}
// export interface Theatre1 {
//   theatreId:number;
//   theatreName: string;
//   category: string[];
// }

export interface SeatLayout {
  seatNumber:number;
}
export interface Category1 {
  type:string;
  noOfColumns:number;
  noOfRows:number;
  seatLayout:SeatLayout[];
}
export interface ScreenLayout{
  category:Category1[];
}
export interface Theatre1 {
  theatreId:number;
  theatreName: string;
  theatreCity:string;
  theatreAddress:string;
  screenLayout:ScreenLayout;
}

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  loginToken: AuthToken; 
  email: string;
  selectedLocation
  showDetails:FormGroup

  constructor(private showService:ShowService,private alerts: AlertsService,private router:Router) { }

  ngOnInit() {
    try{
      const tokenObtained = localStorage.getItem('currentUser');
      this.loginToken=jwt_decode(tokenObtained);
      console.log('decoded token',jwt_decode(tokenObtained));
      this.email=this.loginToken.sub;
      }
      catch(error){
        console.log(error);
      }
    this.showDetails = new FormGroup({
       city : new FormControl(''),
       movie: new FormControl(''),
       theatre: new FormControl(''),
       category11: new FormControl(''),
       price1 : new FormControl(''),
       price2 : new FormControl(''),
       price3 : new FormControl(''),
       category22: new FormControl(''),
       category33: new FormControl(''),
       date1 : new FormControl(''),
       count:new FormControl(''),
       date2 : new FormControl(''),
       date3 : new FormControl(''),
       date4 : new FormControl(''),
       date : new FormControl('')
    })
  }

  numbers:number[]=[1,2,3,4];

  locations: Location[] = [
    { value: "Bangalore" },
    { value: "Delhi" },
    { value: "Hyderabad" },
    { value: "Mumbai" },
    { value: "Chennai" },
    { value: "Guwahati" }
  ]

  movies: Movie1[]=[];
  theatres:Theatre1[]=[];

  getMovies(cityName:string){
    this.showService.getMoviesByCity(cityName).subscribe(data =>{
      this.movies=data;
    })
  }

  getTheatres(selectedLocation){
    this.showService.getAllTheatres(this.email,selectedLocation).subscribe(data => {
      this.theatres=data;
      console.log(this.theatres);
    })
  }


  categories1=[];
  size:number;

  categories=[];
  category:Category;

  timings:Timing[]=[];
  timing:Timing;

  theatresList:Theatre[]=[];
  theatre:Theatre;

  movieList:Movie[]=[];
  movie:Movie;

  show:Show;
  shows:Show[]=[];
  flag=0;

  setCategory(selectedcategory:string,enteredPrice:number){
    this.category=new Category();
    this.category.Category(selectedcategory,enteredPrice);
    this.categories.push(this.category);
    console.log(this.categories)
  }

  temp:string;
  temp2:string;
  addTiming(time:any,date:any){
    this.temp2=date.toString();
    this.temp2=this.temp2.substr(4,11);
    this.temp=this.temp2+" "+time;
    console.log(this.temp);
    this.timing=new Timing();
    this.timing.Timing(this.temp,"1a",this.categories);
    this.timings.push(this.timing);

  }

  setTheatre(theatre:Theatre1){
    this.categories1=theatre.screenLayout.category;
    this.size=this.categories1.length;
  }

  setShowJsonUpdate(city:string,selectedMovie:Movie1,theatre:Theatre1){
    this.theatre= new Theatre();
    this.theatre.Theatre(theatre.theatreId,theatre.theatreName,null,null,this.timings);
    this.theatresList.push(this.theatre);

    this.movie=new Movie();
    this.movie.Movie(selectedMovie.movieId,selectedMovie.movieTitle,null,null,null,null,null,null,null,null,this.theatresList);
    this.movieList.push(this.movie);

    this.show=new Show();
    this.show.Show(city,this.movieList);
    console.log(this.show);
    this.showService.updateShow(theatre.theatreId,this.show).subscribe(data =>{
      this.alerts.setMessage("updated Successfully!",'success');
      this.router.navigate(['show',"update"]);
      window.location.reload();
    },error=>{
      this.alerts.setMessage("Show Not Exists to update",'error');
      this.router.navigate(['show',"add"]);
    })


  }


}


