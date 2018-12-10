import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/domains/Movie';
import { DistributorService } from 'src/app/services/distributor.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {
  email:string;
  cityName:string;
  movie:IMovie= {
    "movieId": null,
    "movieTitle": null,
    "yearOfRelease": "2018",
    "posterUrl": "shxbj",
    "ratingArray": [],
    "averageRating": 0,
    "language": "english",
    "certificate": "UA",
    "genre": "action"
};
  constructor(private distributorService:DistributorService,private route:ActivatedRoute) { }

 
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let emailId= params.get('mailId');
      let cityName=params.get('cityName');
      this.email=emailId;
      this.cityName=cityName;    
       });
   }

   addMovie(id:number,title:string,year:string,poster:string,language:string,certificate:string,genre:string)
   {
     console.log("add movie in component")
     this.movie.movieId=id;
     this.movie.movieTitle=title;
     this.movie.yearOfRelease=year;
     this.movie.posterUrl=poster;
     this.movie.language=language;
     this.movie.certificate=certificate;
     this.movie.genre=genre;
     this.distributorService.addMovie(this.email,this.cityName,this.movie);
   }

}
