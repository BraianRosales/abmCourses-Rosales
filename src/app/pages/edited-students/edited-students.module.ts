import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditedStudentsComponent } from './edited-students.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/@shared/shared.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


const routes: Routes = [
  {
    path: '',
    component: EditedStudentsComponent
  }
]

@NgModule({
  declarations: [
    EditedStudentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    CKEditorModule,
  ],
})
export class EditedStudentsModule { }
