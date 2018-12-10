import { Component, OnInit, Input } from '@angular/core';
import { Timing } from 'src/app/domains/Timing';

@Component({
  selector: 'app-theatre-shows',
  templateUrl: './theatre-shows.component.html',
  styleUrls: ['./theatre-shows.component.css']
})
export class TheatreShowsComponent implements OnInit {
  showId: string;
  showTime: String;
  categories: any;
  @Input() private showDetails: Timing;

  constructor() { }

  ngOnInit() {
    this.showId = this.showDetails.showId;
    this.showTime = this.showDetails.showTime;
    this.categories = this.showDetails.categories;
  }

}