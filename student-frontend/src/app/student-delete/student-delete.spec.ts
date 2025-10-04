import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDelete } from './student-delete';

describe('StudentDelete', () => {
  let component: StudentDelete;
  let fixture: ComponentFixture<StudentDelete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDelete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDelete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
