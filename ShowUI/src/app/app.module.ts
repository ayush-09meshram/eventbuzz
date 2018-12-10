import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {routingComponent} from './app-routing.module';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatIconModule,
  MatNativeDateModule,
  MatSelectModule,
  MatOptionModule,
  MatCheckboxModule,
  MatCardModule,
  MatInputModule,
  MatRadioModule,
  MatDatepickerModule
} from '@angular/material';
import { ShowService } from './show.service';
import {HttpClientModule} from '@angular/common/http';
import { AlertsModule } from 'angular-alert-module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatButtonModule,
    FormsModule, ReactiveFormsModule ,
    MatFormFieldModule,
    MatIconModule,
  MatNativeDateModule,
  MatSelectModule,
  MatOptionModule,
  MatCheckboxModule,
  MatCardModule,
  MatInputModule,
  MatRadioModule,
  MatDatepickerModule,
  HttpClientModule,
  AlertsModule.forRoot(),
  FlexLayoutModule
  ],
  providers: [ShowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
