import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

const modules = [
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatSidenavModule
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
