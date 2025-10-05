import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student';
import { Student } from '../data/student.model';

@Component({
  selector: 'app-student-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-edit.html',
  styleUrls: ['./student-edit.css']
})
export class StudentEditComponent implements OnInit {
  student: Student = {
    identifier: '',
    name: '',
    surname: ''
  };
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadStudent(id);
    }
  }

  loadStudent(id: string): void {
    this.studentService.getStudentById(id).subscribe({
      next: (data) => {
        this.student = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al obtener estudiante', err);
        alert('❌ No se pudo cargar el estudiante.');
        this.router.navigate(['/']);
      }
    });
  }

  updateStudent(): void {
  this.studentService.updateStudent(this.student.identifier, this.student).subscribe({
    next: () => {
      alert('✅ Estudiante actualizado correctamente.');
      this.router.navigate(['/']);
    },
    error: (err) => {
      console.error('Error al actualizar estudiante', err);
      alert(`❌ No se pudo actualizar el estudiante: ${err.message}`);
    }
  });
}


  goBack(): void {
    this.router.navigate(['/']);
  }
}
