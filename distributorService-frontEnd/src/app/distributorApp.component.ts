import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from './services/data.service';
import { DistributorService } from './services/distributor.service';

@Component({
  selector: 'app-root',
  templateUrl: './distributorApp.component.html',
  styleUrls: ['./distributorApp.component.css']
})
export class DistributorAppComponent {
  title = 'distributorService';


}
