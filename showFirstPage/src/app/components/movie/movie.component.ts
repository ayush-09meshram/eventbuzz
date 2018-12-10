import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/domains/Movie';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  cityName:string;
  movieId:number;
  show=[];
  movies=[];
  omdbMovie: Movie={
    movieId: 10,
    movieTitle: "ABCD",
    yearOfRelease: "2018",
    posterUrl:"no image",
    ratingArray: [],
    averageRating:6,
    language:"english",
    certificate:"A",
    genre: [],
    theatres: [],
  };
  constructor(private route:ActivatedRoute,private dataService:DataService,private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let cityName = params.get('cityName');
      let movieId=params.get('movieId');
      this.cityName=cityName;
      this.movieId=parseInt(movieId);

      this.dataService.currentShow.subscribe((data)=>{
        console.log("container",data);
        this.show=data;
        for(let i of this.show)
        {
           if(i.cityName==this.cityName)
             {this.movies=i["movies"];
            console.log("movies",this.movies);}
       }
       for(let i of this.movies)
       {
          if(i.movieId==this.movieId)
            {this.omdbMovie=i;
           console.log("movie",this.omdbMovie);}
      }
      },
      (error)=>{console.log(error)});

    });
  }

  getTheatres()
  {
      this.router.navigate(["theatres"],{relativeTo:this.route});
  }

}
