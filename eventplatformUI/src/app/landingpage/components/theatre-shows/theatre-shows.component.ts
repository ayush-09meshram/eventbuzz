import { Component, OnInit, Input } from '@angular/core';
import { Timing } from '../../domains/Timing';

@Component({
  selector: 'app-theatre-shows',
  templateUrl: './theatre-shows.component.html',
  styleUrls: ['./theatre-shows.component.css']
})
export class TheatreShowsComponent implements OnInit {
  showId: string;
  showTime: String;
  time: string ;
  categories: any;
  @Input() private showDetails: Timing;

  constructor() { }

  ngOnInit() {
    this.showId = this.showDetails.showId;
    this.showTime = this.showDetails.showTime;
    console.log(this.showTime);
    this.time = this.showTime.substr(11,5);
    console.log(this.time);
    this.categories = this.showDetails.categories;
  }

}