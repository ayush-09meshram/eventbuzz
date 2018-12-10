import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IMovie } from '../../domains/Movie';
import { DistributorService } from '../../services/distributor.service';
import { Genres } from '../../domains/Genre';
import { DataService } from '../../services/data.service';



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
    "movieTitle":" Title",
    "yearOfRelease": "2018",
    "posterUrl": "url",
    "ratingArray": [],
    "averageRating": 0,
    "language": "English",
    "certificate": "UA",
    "genre": ["action"]
};
genreMap:Genres={
  "action":false,
  "comedy":false,
  "horror":false,
  "scifi":false,
  "fantasy":false,
  "romance":false,
  "drama":false
};
title="title";
genreArray=[];
lastId=1;
languages=["English","Hindi","Marathi","Malayalam","Telugu","Tamil"];

  constructor(private distributorService:DistributorService,private route:ActivatedRoute,private data:DataService) { }

 
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let emailId= params.get('mailId');
      let cityName=params.get('cityName');
      this.email=emailId;
      this.cityName=cityName;    
       });
   }

 

   onSubmit()
   {
     this.data.currentId.subscribe((data)=>{
       this.lastId=data;
      console.log("last id form",this.lastId);
      })
     this.movie.movieId=this.lastId*(Math.floor(Math.random() * 100) + 1)+10;
     if(this.genreMap.action==true)
     {
       this.genreArray.push("Action");
     }
     if(this.genreMap.comedy==true)
     {
       this.genreArray.push("Comedy");
     }
     if(this.genreMap.fantasy==true)
     {
       this.genreArray.push("Fantasy");
     }
     if(this.genreMap.scifi==true)
     {
       this.genreArray.push("SCI-FI");
     }
     if(this.genreMap.drama==true)
     {
       this.genreArray.push("Drama");
     }
     if(this.genreMap.romance==true)
     {
       this.genreArray.push("Romance");
     }
     this.movie.genre=this.genreArray;
     console.log("movie",this.movie);
     this.distributorService.addMovie(this.email,this.cityName,this.movie);
     this.genreArray=[];
   }
   

}
