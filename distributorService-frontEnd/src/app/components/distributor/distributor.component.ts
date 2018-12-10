import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DistributorService } from 'src/app/services/distributor.service';
import { DataService } from 'src/app/services/data.service';
import { IDistributor } from 'src/app/domains/Distributor';
import { ICity } from 'src/app/domains/City';

@Component({
  selector: 'app-distributor',
  templateUrl: './distributor.component.html',
  styleUrls: ['./distributor.component.css']
})
export class DistributorComponent implements OnInit {

  distributors=[];
  email: string;
  distributor: IDistributor = {
    "email": "default",
    "cities": []
  };
  public cities = [];
  city: ICity = { "cityName": "default", "movies": [] };
  @Input('parentData') public search;

  constructor(private router: Router, private route: ActivatedRoute, private distributorService: DistributorService, private data: DataService) {
    console.log("constructor loaded");

  }

  ngOnInit() {
    console.log("distributor component loaded");

    this.route.paramMap.subscribe((params: ParamMap) => {
      let emailId = params.get('mailId');
      this.email = emailId;
      this.data.currentDistributors.subscribe((data) => {
        this.distributors = data;
        for(let i of this.distributors)
        {
           if(i.email==this.email)
             {this.distributor=i;}
       }
      this.cities = this.distributor.cities;
      });
    });
    


  }

  addCity(cityName) {
    console.log("add city in component");
    this.city.cityName = cityName;
    this.distributorService.addCity(this.email, this.city);
    location.reload(true);
  }

}
