import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EliminatedStudentsComponent } from './eliminated-students.component';
import { SharedModule } from 'src/app/@shared/shared.module';


const routes: Routes = [
  {
    path: '',
    component: EliminatedStudentsComponent
  }
]

@NgModule({
  declarations: [
    EliminatedStudentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
})
export class EliminatedStudentsModule { }
