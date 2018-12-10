
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/domains/Movie';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Theatre } from 'src/app/domains/Theatre';

@Component({
  selector: 'app-show-timing-body',
  templateUrl: './show-timing-body.component.html',
  styleUrls: ['./show-timing-body.component.css']
})
export class ShowTimingBodyComponent implements OnInit {

  cityName:string;
  movieId:number;
  theatres=[];
  show=[];
  movies=[];
  movieTitle:string;
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
  constructor(private route:ActivatedRoute,private dataService:DataService) { }

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
             {this.movies=i["movies"];}
       }
       for(let i of this.movies)
       {
          if(i.movieId==this.movieId)
            {
              this.movieTitle=i["movieTitle"];
              this.theatres=i["theatres"];
              console.log("theatres",this.theatres);
            }
      }
      },
      (error)=>{console.log(error)});

    });
  }

}
