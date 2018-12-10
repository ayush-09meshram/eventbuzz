import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InputService } from '../../services/input.service';
import { DataService1 } from '../../services/data.service';

@Component({
  selector: 'app-select-city',
  templateUrl: './select-city.component.html',
  styleUrls: ['./select-city.component.css']
})
export class SelectCityComponent implements OnInit {
  shows=[];
  constructor(private input:InputService,private router:Router,private route:ActivatedRoute,private dataService:DataService1) { }

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
    this.dataService.changeCity(cityName);
    this.dataService.currentCity.subscribe((data)=>{console.log("city changed",data)});
    this.router.navigate(["show",cityName],{relativeTo:this.route});
  }

}
