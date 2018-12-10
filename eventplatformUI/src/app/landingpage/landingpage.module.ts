import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landingpage.component';
import { CustomMaterialModule } from './modules/custom-material/custom-material.module';
import { SelectCityComponent } from './components/select-city/select-city.component';
import { MovieContainerComponent } from './components/movie-container/movie-container.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { RoutingModule, routingComponents } from './modules/routing/routing.module';
import { MovieComponent } from './components/movie/movie.component';
import { TheatreComponent } from './components/theatre/theatre.component';
import { TheatreShowsComponent } from './components/theatre-shows/theatre-shows.component';
import { ShowTimingBodyComponent } from './components/show-timing-body/show-timing-body.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { HeaderMainComponent } from '../header-main/header-main.component';
import { DataService1 } from './services/data.service';
import { MaterialModule } from '../theatreFrontend/material';
import { MatRadioButton } from '@angular/material';


@NgModule({
  declarations: [
    LandingComponent,
    SelectCityComponent,
    MovieContainerComponent,
    MovieCardComponent,
    MovieComponent,
    TheatreComponent,
    TheatreShowsComponent,
    ShowTimingBodyComponent,
    HeaderComponent,

  ],
  imports: [
    CustomMaterialModule,HttpClientModule,RoutingModule,CommonModule, 
  ],
  providers: [],
  bootstrap: [LandingComponent,routingComponents]
})
export class LandingModule { }
