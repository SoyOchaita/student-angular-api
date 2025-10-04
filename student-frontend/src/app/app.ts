import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, StudentListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
