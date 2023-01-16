import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule)
      },
      {
        path: 'alumnos-editados',
        loadChildren: () => import('./edited-students/edited-students.module').then((m) => m.EditedStudentsModule)
      },
      {
        path: 'alumnos-eliminados',
        loadChildren: () => import('./eliminated-students/eliminated-students.module').then((m) => m.EliminatedStudentsModule)
      },
      {
        path: 'alumnos-nuevos',
        loadChildren: () => import('./new-students/new-students.module').then((m) => m.NewStudentsModule)
      },
      {
        path: '**',
        redirectTo: 'admin'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
