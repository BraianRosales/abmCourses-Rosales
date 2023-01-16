import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditedStudentsComponent } from './edited-students.component';

describe('EditedStudentsComponent', () => {
  let component: EditedStudentsComponent;
  let fixture: ComponentFixture<EditedStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditedStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditedStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
