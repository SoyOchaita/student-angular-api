import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';   
import { Router } from '@angular/router';
import { StudentService } from '../services/student';
import { Student } from '../data/student.model';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.html',
  styleUrls: ['./student-list.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  loading = true;

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getStudents().subscribe({
      next: (data) => {
        this.students = data; 
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al obtener estudiantes', err);
        this.loading = false;
      }
    });
  }

  goToAdd(): void {
    this.router.navigate(['/student/add']);
  }

  editStudent(id: string): void {
    this.router.navigate(['/student/edit', id]);
  }

  deleteStudent(id: string): void {
  if (confirm('¿Seguro que deseas eliminar este estudiante?')) {
    this.studentService.deleteStudent(id).subscribe({
      next: () => {
        alert('🗑️ Estudiante eliminado correctamente.');
        this.loadStudents();
      },
      error: (err) => {
        console.error('Error al eliminar estudiante', err);
        alert(`❌ No se pudo eliminar: ${err.message}`);
      }
    });
  }
}

}
