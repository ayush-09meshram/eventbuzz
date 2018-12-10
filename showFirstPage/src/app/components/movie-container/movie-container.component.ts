import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.css']
})
export class MovieContainerComponent implements OnInit {
  show=[];
  movies=[];
  cityName:string;
  constructor(private route:ActivatedRoute,private dataService:DataService) { }

  ngOnInit() {

    

    this.route.paramMap.subscribe((params: ParamMap) => {
      let cityName = params.get('cityName');
      this.cityName=cityName;

      this.dataService.currentShow.subscribe((data)=>{
        console.log("container",data);
        this.show=data;
        for(let i of this.show)
        {
           if(i.cityName==this.cityName)
             {this.movies=i["movies"];
            console.log("movies",this.movies);}

       }
      },
      (error)=>{console.log(error)});

    });
  

}
}
