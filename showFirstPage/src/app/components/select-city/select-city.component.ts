import { Component, OnInit } from '@angular/core';
import { InputService } from 'src/app/services/input.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-select-city',
  templateUrl: './select-city.component.html',
  styleUrls: ['./select-city.component.css']
})
export class SelectCityComponent implements OnInit {
  shows=[];
  constructor(private input:InputService,private router:Router,private route:ActivatedRoute,private dataService:DataService) { }

  ngOnInit() {
    this.dataService.currentShow.subscribe(
      (data)=>{
        console.log(data);
        this.shows=data;
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  loadMovies(cityName)
  {
    this.router.navigate(["show",cityName],{relativeTo:this.route});
  }

}
