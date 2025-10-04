import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEdit } from './student-edit';

describe('StudentEdit', () => {
  let component: StudentEdit;
  let fixture: ComponentFixture<StudentEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
