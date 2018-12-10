import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginauthenticationComponent } from './loginauthentication.component';
import { FormComponent } from './form/form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes} from '@angular/router';
import { ModelComponent } from './model/model.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { User } from './user';
import { AuthenticationserviceService } from './services/authenticationservice.service';
import { LoginAuthenticationRoutingModule } from './loginauthentication-routing.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    LoginauthenticationComponent,
    FormComponent,
    DashboardComponent,
    ModelComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    LoginAuthenticationRoutingModule,
  ],
  providers: [AuthenticationserviceService],
  bootstrap: [LoginauthenticationComponent]
})
export class LoginauthenticationModule { }
