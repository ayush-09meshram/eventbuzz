import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DistributorService } from 'src/app/services/distributor.service';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.css']
})
export class CityCardComponent implements OnInit {

  @Input('parentData') public city;
  @Input('email') public email;
  constructor(private route:ActivatedRoute,private router:Router,private distributorService:DistributorService) { }

  getCity(search: string) {
 
    this.router.navigate([search], { relativeTo: this.route });
  }
  deleteCity()
  {
    this.distributorService.deleteCity(this.email,this.city.cityName);
    location.reload(true);
  }

  ngOnInit() {
  }

}
