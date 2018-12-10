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
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  selectedLocation
  showDetails:FormGroup


  constructor(private showService:ShowService,private alerts: AlertsService,private router:Router) { }

  ngOnInit() {
    this.showDetails = new FormGroup({
       city : new FormControl(''),
       movie: new FormControl(''),
       theatre: new FormControl(''),
       category1: new FormControl(''),
       price1 : new FormControl(''),
       price2 : new FormControl(''),
       price3 : new FormControl(''),
       category2: new FormControl(''),
       category3: new FormControl(''),
       date1 : new FormControl(''),
       count:new FormControl(''),
       date2 : new FormControl(''),
       date3 : new FormControl(''),
       date4 : new FormControl('')
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
    console.log(cityName);
    this.showService.getMoviesByCity(cityName).subscribe(data =>{
      this.movies=data;
    })
  }

  getTheatres(selectedLocation){
    this.showService.getAllTheatres("abcfd@gmail.com").subscribe(data => {
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

  Msg;
  setShowJson(city:string,selectedMovie:Movie1,theatre:Theatre1){
    // this.theatre= new Theatre();
    // this.theatre.Theatre(theatre.theatreId,theatre.theatreName,null,null,null);
    // this.theatresList.push(this.theatre);

    // this.movie=new Movie();
    // this.movie.Movie(selectedMovie.movieId,selectedMovie.movieTitle,null,null,null,null,null,null,null,this.theatresList);
    // this.movieList.push(this.movie);

    // this.show=new Show();
    // this.show.Show(city,this.movieList);
    // console.log(this.show);

    this.showService.deleteShow(city,selectedMovie.movieId,theatre.theatreId).subscribe(data =>{
      this.alerts.setMessage('Deleted Successfully!','success');
      this.router.navigate(['/add']);
    },error=>{
      this.alerts.setMessage('Show not found to delete','error');
      this.router.navigate(['/add']);
    })
  }


}
