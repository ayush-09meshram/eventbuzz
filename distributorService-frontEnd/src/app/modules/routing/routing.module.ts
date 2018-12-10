import { NgModule, Component } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DistributorComponent } from 'src/app/components/distributor/distributor.component';
import { CityComponent } from 'src/app/components/city/city.component';
import { MovieComponent } from 'src/app/components/movie/movie.component';
import { DistributorListComponent } from 'src/app/components/distributor-list/distributor-list.component';
import { MovieFormComponent } from 'src/app/components/movie-form/movie-form.component';
const routes:Routes=[
  {path:'distributors',component:DistributorListComponent},
  {path:'distributors/:mailId',component:DistributorComponent},
  {path:'distributors/:mailId/:cityName',component:CityComponent},
  {path:'distributors/:mailId/:cityName/addMovie',component:MovieFormComponent},
  {path:'distributors/:mailId/:cityName/:movieId',component:MovieComponent}
  
    
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }
export const routingComponents=[DistributorComponent,CityComponent,MovieComponent,DistributorListComponent,MovieFormComponent];