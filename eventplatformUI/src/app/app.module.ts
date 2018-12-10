import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {ServicesModule} from "./services/services.module";
import { HomeComponent } from './home/home.component';
import { TheatreFrontendModule } from './theatreFrontend/theatreFrontend.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './theatreFrontend/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UserregistrationModule } from './user-registration/user-registration.module';
import { ShowuiModule } from './showui/showui.module';
import { AddComponent } from './showui/add/add.component';
import { ShowuiRoutingModule } from './showui/showui-routing.module';
import { UpdateComponent } from './showui/update/update.component';
import { DeleteComponent } from './showui/delete/delete.component';
import { CoreDataService } from './services/data.service';
import { MovieComponent } from './landingpage/components/movie/movie.component';
import { AlertsModule } from 'angular-alert-module';
import { LandingComponent } from './landingpage/landingpage.component';
import { SelectCityComponent } from './landingpage/components/select-city/select-city.component';
import { HeaderMainComponent } from './header-main/header-main.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderMainComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TheatreFrontendModule,
    UserregistrationModule,
    AlertsModule.forRoot(),
  ],
  providers: [CoreDataService,SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
