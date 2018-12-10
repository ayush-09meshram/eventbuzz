import { NgModule, Component } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SelectCityComponent } from 'src/app/components/select-city/select-city.component';
import { MovieContainerComponent } from 'src/app/components/movie-container/movie-container.component';
import { MovieComponent } from 'src/app/components/movie/movie.component';
import { TheatreComponent } from 'src/app/components/theatre/theatre.component';
import { ShowTimingBodyComponent } from 'src/app/components/show-timing-body/show-timing-body.component';

const routes:Routes=[
  {path:'',component:SelectCityComponent},
 {path:'show/:cityName',component:MovieContainerComponent},
 {path:'show/:cityName/:movieId',component:MovieComponent},
 {path:'show/:cityName/:movieId/theatres',component:ShowTimingBodyComponent}
    
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }
export const routingComponents=[SelectCityComponent,MovieComponent,ShowTimingBodyComponent,MovieContainerComponent];