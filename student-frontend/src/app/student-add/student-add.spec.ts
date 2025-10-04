import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAdd } from './student-add';

describe('StudentAdd', () => {
  let component: StudentAdd;
  let fixture: ComponentFixture<StudentAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
