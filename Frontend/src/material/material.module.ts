import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar'
import {MatInputModule} from '@angular/material/input'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    MatToolbarModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MaterialModule { }
