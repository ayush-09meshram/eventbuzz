import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { stringify } from '@angular/core/src/util';
import { DataService1 } from '../../services/data.service';
import { CoreDataService } from 'src/app/services/data.service';
import * as jwt_decode from "jwt-decode";
import { AuthToken } from 'src/app/shared/authToken';

@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.css']
})
export class MovieContainerComponent implements OnInit {
  show=[];
  movies=[];
  moviesSearch=[];
  cityName:string;
  search="default";
  movieTitle:string;
  producerToken: AuthToken; 
  email: string ="Please Login";
  constructor(private route:ActivatedRoute,private dataService:DataService1,private coreData:CoreDataService) { }

  ngOnInit() {
    console.log('component container loaded');
    this.route.paramMap.subscribe((params: ParamMap) => {
      let cityName = params.get('cityName');
      this.cityName=cityName;
      this.dataService.changeCity(cityName);

      this.dataService.currentShow.subscribe((data)=>{
        console.log("container",data);
        this.show=data;
        for(let i of this.show)
        {
           if(i.cityName==this.cityName)
             {this.movies=i["movies"];
             this.moviesSearch=i["movies"];
            console.log("movies",this.movies);}

       }
      },
      (error)=>{console.log(error)});

    });
    try{
      console.log('user status',this.email);
      const tokenObtained = localStorage.getItem('currentUser');
      this.producerToken=jwt_decode(tokenObtained);
      this.email=this.producerToken.sub;
      console.log('user status 2',this.email);
      }
      catch(error){
        console.log(error);
      }

    
  }
  filter(search:string)
  {
    this.movies=this.moviesSearch.slice();
    this.search=search;
    this.search.toLowerCase();
    let j;
    for(j=0;j<this.movies.length;j++)
    {
      this.movieTitle=this.movies[j]["movieTitle"];
      if(this.movieTitle.toLowerCase().indexOf(this.search.toLowerCase())==-1)
      {
        this.movies.splice(j,1);
        j--;
      }
     
    }
  }
  
}
