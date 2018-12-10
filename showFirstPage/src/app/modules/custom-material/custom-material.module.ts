
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule, MatCardActions} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  imports: [
    CommonModule,MatCardModule,MatButtonModule,MatFormFieldModule,MatSelectModule,MatMenuModule

  ],
  exports:[
    MatCardModule,MatButtonModule,MatFormFieldModule,MatMenuModule,MatSelectModule
  ],
  declarations: []
})
export class CustomMaterialModule { }
