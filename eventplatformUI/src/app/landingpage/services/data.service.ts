import { Injectable } from '@angular/core';
import { Show } from '../domains/Show';
import { BehaviorSubject } from 'rxjs';
import { InputService } from './input.service';

@Injectable({
  providedIn: 'root'
})
export class DataService1 {

  private citySource=new BehaviorSubject("default City");
  currentCity=this.citySource.asObservable();
  public shows:Show[];
  private showSource=new BehaviorSubject<Show[]>([]);
  currentShow=this.showSource.asObservable();
  constructor(private input:InputService) { }
  changeShow()
  {
    console.log("changedistributor");
    this.input.getShows().subscribe((data)=>{
      this.shows=data;
      this.showSource.next(this.shows);
    });

    
  }
  changeCity(city:string)
  {
    this.citySource.next(city);
  }

}

