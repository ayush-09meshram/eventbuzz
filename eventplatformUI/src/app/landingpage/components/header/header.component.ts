import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CoreDataService } from 'src/app/services/data.service';
import * as jwt_decode from "jwt-decode";
import { AuthToken } from 'src/app/shared/authToken';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService1 } from '../../services/data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()  public childEvent=new EventEmitter();
  cityName: string;
  email: string ="Please Login";
  email1:string;
  tokenObtained = localStorage.getItem('currentUser');
  loginToken: AuthToken; 
  shows=[];
  constructor(private coreService:CoreDataService,private route:ActivatedRoute,private router:Router,private cityData:DataService1,private dataService:DataService1) { }

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

    this.cityData.currentCity.subscribe((data)=>
    {this.cityName=data});

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
  
  filter(search:string)
  {
    this.childEvent.emit(search);
  }

  logoutClicked(){
    localStorage.removeItem('currentUser')
    console.log('LoggedOut');
      this.router.navigate([
        'landing/show',this.cityName
      ] );
      window.location.reload();
  }


  loadMovies(cityName)
  {
    this.dataService.changeCity(cityName);
    this.router.navigate([
      'landing/show',this.cityName
    ] );
  }
}
