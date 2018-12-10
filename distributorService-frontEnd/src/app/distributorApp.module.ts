import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DistributorAppComponent } from './distributorApp.component';
import { CustomMaterialModule } from './modules/custom-material/custom-material.module';
import { DistributorComponent } from './components/distributor/distributor.component';
import { CityComponent } from './components/city/city.component';
import { MovieComponent } from './components/movie/movie.component';
import { RoutingModule, routingComponents } from './modules/routing/routing.module';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './components/index/index.component';
import { DistributorListComponent } from './components/distributor-list/distributor-list.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { CityCardComponent } from './components/city-card/city-card.component';

@NgModule({
  declarations: [
    DistributorAppComponent,
    DistributorComponent,
    CityComponent,
    MovieComponent,
    IndexComponent,
    DistributorListComponent,
    MovieFormComponent,
    MovieCardComponent,
    CityCardComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,CustomMaterialModule,RoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [DistributorAppComponent,routingComponents]
})
export class DistributorAppModule { }
