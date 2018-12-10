import { Component, OnInit } from '@angular/core';
import { Producer } from 'src/app/domain/producer';
import { HttpClient } from '@angular/common/http';
import { Theatre } from '../../domain/theatre';
import { Router } from '@angular/router';
import { ProducerService } from '../../services/producer-service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  email = 'abcfd@gmail.com';
  producer: Producer;
  tempTheatre;
  public value = 0;
  theatreArr;

  constructor(
    private http: HttpClient,
    private router: Router,
    private producerService: ProducerService) { }

  ngOnInit() {
    console.log('body oninit started');
    this.defaultLoad();
  }

  defaultLoad() {
    console.log('body load started');
    this.producerService.getTheatreByProducerEmail(this.email).subscribe((data: Theatre[]) => {
       this.theatreArr = data;
       this.tempTheatre = this.theatreArr;
      });

        console.log('body data', this.theatreArr);
  }

  onClick() {
    this.value = 1;
    this.router.navigate([
      '/registrationform'
    ] );
  }

}
