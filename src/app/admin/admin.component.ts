import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from './admin';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  displayedColumns: string[] = ['dni', 'nameAndSurname', 'street', 'height', 'phone'];
  dataSource = new MatTableDataSource<Student>;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getStudents().subscribe((students: Student[]) => {
      this.dataSource.data = students;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
