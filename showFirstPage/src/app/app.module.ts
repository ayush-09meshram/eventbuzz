import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CustomMaterialModule } from './modules/custom-material/custom-material.module';
import { SelectCityComponent } from './components/select-city/select-city.component';
import { MovieContainerComponent } from './components/movie-container/movie-container.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { RoutingModule, routingComponents } from './modules/routing/routing.module';
import { MovieComponent } from './components/movie/movie.component';
import { TheatreComponent } from './components/theatre/theatre.component';
import { TheatreShowsComponent } from './components/theatre-shows/theatre-shows.component';
import { ShowTimingBodyComponent } from './components/show-timing-body/show-timing-body.component';
import { LoaderComponent } from './componenets/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectCityComponent,
    MovieContainerComponent,
    MovieCardComponent,
    MovieComponent,
    TheatreComponent,
    TheatreShowsComponent,
    ShowTimingBodyComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,CustomMaterialModule,HttpClientModule,RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,routingComponents]
})
export class AppModule { }
