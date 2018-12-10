import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule, MatCardActions} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  imports: [
    CommonModule,MatCardModule,MatButtonModule,MatFormFieldModule

  ],
  exports:[
    MatCardModule,MatButtonModule,MatFormFieldModule
  ],
  declarations: []
})
export class CustomMaterialModule { }
