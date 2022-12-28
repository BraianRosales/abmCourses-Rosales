import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from './admin';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AdminService {
  studentsList: Observable<Student[]> = of(
    [
      { dni: 37966510, nameAndSurname: 'Braian Rosales', street: 'Avenida 14', height: 2058, phone: 6546654984 },
      { dni: 37966510, nameAndSurname: 'Joaqui Correa', street: 'Calle 16', height: 1841, phone: 6546654984 },
      { dni: 37966510, nameAndSurname: 'Daiana Campos', street: 'Calle 20', height: 585, phone: 6546654984 },
      { dni: 37966510, nameAndSurname: 'Dimitri Fazio', street: 'Avenida 115', height: 2468, phone: 6546654984 },
      { dni: 37966510, nameAndSurname: 'Berenize Altamirano', street: 'Avenida 17', height: 85, phone: 6546654984 },
      { dni: 37966510, nameAndSurname: 'Veronica Aguirre', street: 'Dean Funes', height: 3965, phone: 6546654984 },
      { dni: 37966510, nameAndSurname: 'Juan Top', street: 'Comandante Ramos', height: 4789, phone: 6546654984 },
      { dni: 37966510, nameAndSurname: 'Fernando Gonzales', street: 'Calle 21', height: 1245, phone: 6546654984 },
      { dni: 37966510, nameAndSurname: 'Yoseline Picazo', street: 'Mejias', height: 396, phone: 6546654984 },
      { dni: 37966510, nameAndSurname: 'Walter white', street: 'Casacuberta', height: 1796, phone: 6546654984 },
    ]
  );

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    console.log(this.studentsList);

    return this.studentsList;
  }
}
