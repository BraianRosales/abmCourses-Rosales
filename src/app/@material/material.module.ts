import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';



const modules = [
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    modules
  ]
})
export class MaterialModule { }
