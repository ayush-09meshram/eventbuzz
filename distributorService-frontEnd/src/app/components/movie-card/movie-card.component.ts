import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DistributorService } from 'src/app/services/distributor.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input('movie') public movie;
  @Input('email') public email;
  @Input('cityName') public cityName;
  constructor(private router:Router,private route:ActivatedRoute,private distributorService:DistributorService) { }

  ngOnInit() {
  }
  getMovie(id: number) {
    
    this.router.navigate([id], { relativeTo: this.route });
  }
  deleteMovie()
  {
    this.distributorService.deleteMovie(this.email,this.cityName,this.movie.movieId);
    location.reload(true);
  }

}
