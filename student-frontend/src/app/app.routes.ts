import { Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list';
import { StudentAddComponent } from './student-add/student-add';
import { StudentEditComponent } from './student-edit/student-edit';

export const routes: Routes = [
  { path: '', component: StudentListComponent },
  { path: 'student/add', component: StudentAddComponent },
  { path: 'student/edit/:id', component: StudentEditComponent },
  { path: '**', redirectTo: '' } // 👈 fallback
];
