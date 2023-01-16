import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminatedStudentsComponent } from './eliminated-students.component';

describe('EliminatedStudentsComponent', () => {
  let component: EliminatedStudentsComponent;
  let fixture: ComponentFixture<EliminatedStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminatedStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminatedStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
