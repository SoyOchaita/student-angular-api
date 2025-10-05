import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../services/student';
import { Student } from '../data/student.model';

@Component({
  selector: 'app-student-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-add.html',
  styleUrls: ['./student-add.css']
})
export class StudentAddComponent {
  student: Student = {
    identifier: '',
    name: '',
    surname: ''
  };

  constructor(private studentService: StudentService, private router: Router) {}

addStudent(): void {
  this.studentService.createStudent(this.student).subscribe({
    next: () => {
      alert('✅ Estudiante agregado correctamente.');
      this.router.navigate(['/']);
    },
    error: (err) => {
      console.error('Error al agregar estudiante', err);
      alert(`❌ No se pudo agregar el estudiante: ${err.message}`);
    }
  });
}


  goBack(): void {
    this.router.navigate(['/']);
  }
}
