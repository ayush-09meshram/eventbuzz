import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ShowuiRoutingModule } from './showui-routing.module';
import { ShowuiComponent } from './showui.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {routingComponent} from './showui-routing.module';

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
import { MaterialModule } from '../main-landing-page/material';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    ShowuiComponent,
    routingComponent
  ],
  imports: [
    ShowuiRoutingModule,
    MatButtonToggleModule,
    MatButtonModule,
    FormsModule, 
    ReactiveFormsModule ,
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
    MaterialModule,
    HttpClientModule,
    CommonModule,
    FlexLayoutModule
  ],
  providers: [ShowService],
  bootstrap: [ShowuiComponent]
})
export class ShowuiModule { }
