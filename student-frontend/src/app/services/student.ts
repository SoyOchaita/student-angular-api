import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Student } from '../data/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = '/api/student';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(res => res.data),
      catchError(this.handleError)
    );
  }

  getStudentById(id: string): Observable<Student> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      map(res => res.data),
      catchError(this.handleError)
    );
  }

  createStudent(student: Student): Observable<any> {
    return this.http.post(this.apiUrl, student).pipe(
      catchError(this.handleError)
    );
  }

  updateStudent(id: string, student: Student): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, student).pipe(
      catchError(this.handleError)
    );
  }

  deleteStudent(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // ⚠️ Manejo centralizado de errores
  private handleError(error: HttpErrorResponse) {
    let errorMsg = 'Error desconocido. Intenta nuevamente.';

    if (error.error instanceof ErrorEvent) {
      // Error de cliente (red, frontend)
      errorMsg = `Error de conexión: ${error.error.message}`;
    } else if (error.error?.message) {
      // Error del backend con mensaje estructurado
      errorMsg = error.error.message;
    } else if (error.status === 0) {
      errorMsg = 'No se pudo conectar con el servidor.';
    } else {
      // Mensaje genérico según código
      switch (error.status) {
        case 400:
          errorMsg = 'Solicitud incorrecta. Verifica los datos ingresados.';
          break;
        case 404:
          errorMsg = 'Estudiante no encontrado.';
          break;
        case 409:
          errorMsg = 'Conflicto: el estudiante ya existe.';
          break;
        case 500:
          errorMsg = 'Error interno del servidor.';
          break;
      }
    }

    return throwError(() => new Error(errorMsg));
  }
}
